package db

import (
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() (*gorm.DB, error) {
	var err error
	DB, err = gorm.Open(sqlite.Open("./url_clip.db"), &gorm.Config{})
	if err != nil {
		log.Fatalf("failed to open database: %v", err)
		return nil, err
	}

	log.Println("database connected successfully...")

	return DB, nil
}
