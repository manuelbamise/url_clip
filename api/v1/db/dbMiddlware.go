package db

import (
	"context"
	"net/http"

	"gorm.io/gorm"
)

func SetDBMiddleware(db *gorm.DB) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			ctx := context.WithValue(r.Context(), "DB", db)
			next.ServeHTTP(w, r.WithContext(ctx))
		})
	}
}
