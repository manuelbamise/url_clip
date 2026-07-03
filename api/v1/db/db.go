package db

import (
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Url struct {
	Url_ID   uint `gorm:"primaryKey"`
	Url_link string
	Url_code string `gorm:"unique"`
}

var DB *gorm.DB

func InitDB() (*gorm.DB, error) {
	var err error
	DB, err = gorm.Open(sqlite.Open("./url_clip.db"), &gorm.Config{})
	if err != nil {
		log.Fatalf("failed to open database: %v", err)
		return nil, err
	}

	log.Println("database connected successfully...")

	AutoMigrate(&Url{})

	return DB, nil
}

func AutoMigrate(models ...interface{}) {
	err := DB.AutoMigrate(models...)
	if err != nil {
		log.Fatalf("failed to auto migrate: %v", err)
	}
	log.Println("database migrated successfully...")
}
