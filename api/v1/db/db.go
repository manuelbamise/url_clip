package db

import (
	"database/sql"
	"log"

	_ "modernc.org/sqlite"
)

var DB *sql.DB

func InitDB() (*sql.DB, error) {
	var err error
	DB, err = sql.Open("sqlite", "./url_clip.db")
	if err != nil {
		log.Fatalf("failed to open database: %v", err)
		return nil, err
	}

	if err := DB.Ping(); err != nil {
		log.Fatalf("failed to ping database: %v", err)
		return nil, err
	}

	log.Println("database connected successfully...")

	return DB, nil
}
