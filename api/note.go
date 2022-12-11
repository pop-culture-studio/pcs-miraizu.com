package handler

import (
	"encoding/json"
	"log"
	"net/http"
)

const url = "https://d2ttuujo1i51fi.cloudfront.net/note_pcs_miraizu.json"

type NoteJson []struct {
	Title        string `json:"title"`
	Link         string `json:"link"`
	Embed        string `json:"embed"`
	Description  string `json:"description"`
	Thumbnail    string `json:"thumbnail"`
	CreatorImage string `json:"creatorImage"`
	Date         string `json:"date"`
	Time         string `json:"time"`
	Diff         string `json:"diff"`
}

func Handler(w http.ResponseWriter, r *http.Request) {
	res, err := http.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	defer res.Body.Close()

	var data = &NoteJson{}

	decoder := json.NewDecoder(res.Body)
	err = decoder.Decode(data)
	if err != nil {
		log.Fatal(err)
	}

  w.Header().Set("Content-Type", "application/json; charset=utf-8")

	err = json.NewEncoder(w).Encode(data)
	if err != nil {
		log.Fatal(err)
	}

	//fmt.Fprintf(w, "<h1>Hello from Go!</h1>")
}
