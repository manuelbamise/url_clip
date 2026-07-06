package v1Controllers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/manuelbamise/url_clip/handlers"
	v1Services "github.com/manuelbamise/url_clip/v1/service"
	"gorm.io/gorm"
)

func GetAllUrls(w http.ResponseWriter, r *http.Request) {
	database := r.Context().Value("DB").(*gorm.DB)

	urls, err := v1Services.GetAllUrls(database)
	if err != nil {
		log.Println(err.Error())
		handlers.JsonHanlder(w, http.StatusInternalServerError, map[string]any{"status": "error", "message": "Failed to get all urls"})
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
		Url string `json:"url"`
	}

	if err := json.NewDecoder(r.Body).Decode(&urlInput); err != nil {
		log.Println(err.Error())
		handlers.JsonHanlder(w, http.StatusBadRequest, map[string]any{"status": "error", "message": "Failed to decode request body"})
		return
	}

	log.Println(urlInput.Url)

	url, err := v1Services.CreateUrl(urlInput.Url, database)
	if err != nil {
		log.Println(err.Error())
		handlers.JsonHanlder(w, http.StatusBadRequest, map[string]any{"status": "error", "message": "Failed to create url"})
		return
	}

	handlers.JsonHanlder(w, http.StatusCreated, map[string]any{"status": "success", "message": "Url created successfully", "data": url})
}

func DeleteAllUrls(w http.ResponseWriter, r *http.Request) {
	database := r.Context().Value("DB").(*gorm.DB)

	if err := v1Services.DeleteAllUrls(database); err != nil {
		log.Println(err.Error())
		handlers.JsonHanlder(w, http.StatusInternalServerError, map[string]any{"status": "error", "message": "Failed to delete all urls"})
		return
	}

	handlers.JsonHanlder(w, http.StatusOK, map[string]any{"status": "success", "message": "All urls deleted successfully"})
}
