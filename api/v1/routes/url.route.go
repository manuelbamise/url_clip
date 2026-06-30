package v1Routes

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/manuelbamise/url_clip/handlers"
)

func urlRouter() chi.Router {
	r := chi.NewRouter()
	r.Get("/", func(w http.ResponseWriter, _ *http.Request) {
		handlers.JsonHanlder(w, http.StatusOK, map[string]any{"statue": "success", "message": "Message from url route", "data": map[string]any{"url": "http:jsds", "anotherData": "asjfdf"}})
	})
	return r
}
