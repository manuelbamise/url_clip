package v1Controllers

import (
	"encoding/json"
	"net/http"

	"github.com/manuelbamise/url_clip/handlers"
	v1Services "github.com/manuelbamise/url_clip/v1/service"
	"gorm.io/gorm"
)

func GetAllUrls(w http.ResponseWriter, r *http.Request) {
	database := r.Context().Value("DB").(*gorm.DB)

	urls, err := v1Services.GetAllUrls(database)
	if err != nil {
		handlers.JsonHanlder(w, http.StatusInternalServerError, map[string]any{"status": "error", "message": err.Error()})
		return
	}

	if len(urls) == 0 {
		handlers.JsonHanlder(w, http.StatusNotFound, map[string]any{"status": "error", "message": "No urls found"})
		return
	}

	handlers.JsonHanlder(w, http.StatusOK, map[string]any{"status": "success", "message": "Found all urls", "data": urls})
}

func CreateUrl(w http.ResponseWriter, r *http.Request) {
	database := r.Context().Value("DB").(*gorm.DB)

	var urlInput struct {
		url string `json:"url"`
	}

	if err := json.NewDecoder(r.Body).Decode(&urlInput); err != nil {
		handlers.JsonHanlder(w, http.StatusBadRequest, map[string]any{"status": "error", "message": err.Error()})
		return
	}

	url, err := v1Services.CreateUrl(urlInput.url, database)
	if err != nil {
		handlers.JsonHanlder(w, http.StatusBadRequest, map[string]any{"status": "error", "message": err.Error()})
		return
	}

	handlers.JsonHanlder(w, http.StatusCreated, map[string]any{"status": "success", "message": "Url created successfully", "data": url})
}
