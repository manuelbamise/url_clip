package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/manuelbamise/url_clip/handlers"
	v1Controllers "github.com/manuelbamise/url_clip/v1/controllers"
)

func MainRoute() chi.Router {
	r := chi.NewRouter()

	r.Get("/healthz", func(w http.ResponseWriter, r *http.Request) {

		handlers.JsonHanlder(w, http.StatusOK, map[string]any{"status": "success", "message": "Main route is running well!!"})
	})

	r.Get("/{url_code}", v1Controllers.RedirectUrl)

	return r
}
