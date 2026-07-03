package v1Services

import (
	"github.com/manuelbamise/url_clip/v1/db"
	"gorm.io/gorm"
)

func CreateUrl(url string, database *gorm.DB) (*gorm.DB, error) {
	result := database.Create(&url)
	return result, result.Error
}

func GetAllUrls(database *gorm.DB) ([]db.Url, error) {
	var urls []db.Url
	database.Find(&urls, &db.Url{})
	return urls, nil
}
