package main

import (
	"log"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/manuelbamise/url_clip/v1/db"
	v1Routes "github.com/manuelbamise/url_clip/v1/routes"
)

func main() {

	r := chi.NewRouter()

	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST"},
		AllowedHeaders:   []string{"X-PINGOTHER", "Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300,
	}))
	r.Use(middleware.Logger)
	r.Use(middleware.Timeout(60 * time.Second))

	database, err := db.InitDB()
	r.Use(db.SetDBMiddleware(database))

	if err != nil {
		log.Fatalf("failed to init database: %v", err)
	}

	r.Mount("/", MainRoute())
	r.Mount("/v1", v1Routes.MainRouter())

	log.Println("server started on :8080")
	http.ListenAndServe(":8080", r)

}
