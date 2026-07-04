package v1Services

import (
	"errors"

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

func GetUrlByUrlCode(database *gorm.DB, url_code string) (*db.Url, error) {
	var url db.Url

	result := database.Where("url_code=?", url_code).First(&url)

	return &url, result.Error
}

func GetUrlByUrlLink(database *gorm.DB, input_url string) {

}

func UrlExistsByCode(database *gorm.DB, url_code string) error {
	var url db.Url

	result := database.Where("url_code=?", url_code).First(&url)
	if result.Error == nil {
		return errors.New("Record already exists")
	}

	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return nil
	}

	return result.Error
}
