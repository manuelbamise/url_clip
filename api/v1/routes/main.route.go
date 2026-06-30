package v1Routes

import (
	"net/http"

	handlers "github.com/manuelbamise/url_clip/handlers"
)

func RegisterMainRoutes(mux *http.ServeMux) {
	mux.HandleFunc("/v1/", func(w http.ResponseWriter, _ *http.Request) {
		handlers.JsonHanlder(w, http.StatusOK, map[string]any{"statue": "success", "message": "Message from v1 route"})
	})
	registerUrlRoutes(mux)
}
