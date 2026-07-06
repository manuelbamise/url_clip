package v1Services

import (
	"errors"

	"github.com/manuelbamise/url_clip/utils"
	"github.com/manuelbamise/url_clip/v1/db"
	"gorm.io/gorm"
)

func CreateUrl(input_url string, database *gorm.DB) (*db.Url, error) {
	for i := 0; i < 10; i++ {
		code, err := utils.GenerateCode(5)
		if err != nil {
			return nil, err
		}

		url := db.Url{
			Url_link: input_url,
			Url_code: code,
		}

		result := database.Create(&url)
		if errors.Is(result.Error, gorm.ErrDuplicatedKey) {
			continue
		}

		return &url, result.Error
	}
	return nil, errors.New("failed to generate new code")
}

func GetAllUrls(database *gorm.DB) ([]db.Url, error) {
	var urls []db.Url
	database.Find(&urls, &urls)
	return urls, nil
}

func GetUrlByUrlCode(database *gorm.DB, url_code string) (*db.Url, error) {
	var url db.Url

	result := database.Where("url_code=?", url_code).First(&url)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return nil, result.Error
	}

	return &url, result.Error
}

func GetUrlByUrlLink(database *gorm.DB, input_url string) {

}

// func UrlExistsByCode(database *gorm.DB, url_code string) (bool, error) {
// 	var url db.Url
// 	var count int64

// 	result := database.Model(&url).Where("url_code=?", url_code).Count(&count)
// 	if result.Error == nil {
// 		return true, errors.New("Record already exists")
// 	}

// 	return false, nil
// }

func DeleteAllUrls(database *gorm.DB) error {
	var urls []db.Url
	result := database.Where("1=1").Delete(&urls)

	return result.Error
}
