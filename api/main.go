package main

import (
	"fmt"
	"log"
	"net/http"

	v1Routes "github.com/manuelbamise/url_clip/v1/routes"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, _ *http.Request) {
		fmt.Fprintln(w, "Hello, from the root route")
	})

	v1Routes.RegisterMainRoutes(mux)

	server := http.Server{
		Addr:    ":8080",
		Handler: mux,
	}

	log.Println("Server started on :8080")
	err := server.ListenAndServe()
	if err != nil {
		fmt.Println(err)
	}
}
