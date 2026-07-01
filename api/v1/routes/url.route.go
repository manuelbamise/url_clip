package v1Routes

import (
	"github.com/go-chi/chi/v5"
	v1Controllers "github.com/manuelbamise/url_clip/v1/controllers"
)

func urlRouter() chi.Router {
	r := chi.NewRouter()
	r.Get("/", v1Controllers.RootMethod)
	return r
}
