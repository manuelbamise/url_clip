package v1Services

import (
	"github.com/manuelbamise/url_clip/utils"
	"github.com/manuelbamise/url_clip/v1/db"
	"gorm.io/gorm"
)

func CreateUrl(input_url string, database *gorm.DB) (*db.Url, error) {
	code, err := utils.GenerateCode(5)
	if err != nil {
		return nil, err
	}

	url := db.Url{
		Url_link: input_url,
		Url_code: code,
	}

	result := database.Create(&url)
	return &url, result.Error
}

func GetAllUrls(database *gorm.DB) ([]db.Url, error) {
	var urls []db.Url
	database.Find(&urls, &db.Url{})
	return urls, nil
}
