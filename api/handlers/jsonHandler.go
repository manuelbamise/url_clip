package handlers

import (
	"encoding/json"
	"log"
	"net/http"
)

func JsonHanlder(w http.ResponseWriter, code int, payload map[string]any) {
	data, err := json.Marshal(payload)
	if err != nil {
		log.Printf("Failed to marshal JSON response: %v", payload)
		w.WriteHeader(500)
		return
	}

	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(code)
	w.Write(data)
}
