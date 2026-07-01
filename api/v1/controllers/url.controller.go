package v1Controllers

import (
	"net/http"

	"github.com/manuelbamise/url_clip/handlers"
)

func RootMethod(w http.ResponseWriter, _ *http.Request) {
	handlers.JsonHanlder(w, http.StatusOK, map[string]any{"statue": "success", "message": "Message from url route", "data": map[string]any{"url": "http:jsds", "anotherData": "asjfdf"}})

}
