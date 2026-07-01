package main

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/manuelbamise/url_clip/v1/db"
	v1Routes "github.com/manuelbamise/url_clip/v1/routes"
)

func main() {

	_, err := db.InitDB()
	if err != nil {
		log.Fatalf("failed to init database: %v", err)
	}

	r := chi.NewRouter()

	r.Use(middleware.Logger)
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("welcome"))
	})

	r.Mount("/v1", v1Routes.MainRouter())

	log.Println("server started on :8080")
	http.ListenAndServe(":8080", r)

}
