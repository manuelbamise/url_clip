package v1Routes

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	handlers "github.com/manuelbamise/url_clip/handlers"
)

func MainRouter() chi.Router {
	r := chi.NewRouter()
	r.Mount("/url", urlRouter())

	r.Get("/", func(w http.ResponseWriter, _ *http.Request) {
		handlers.JsonHanlder(w, http.StatusOK, map[string]any{"statue": "success", "message": "V1 route is running well!!"})
	})

	return r
}
