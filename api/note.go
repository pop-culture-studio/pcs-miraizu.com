package handler

import (
  "fmt"
	"io"
	"log"
	"net/http"
)

const url = "https://d2ttuujo1i51fi.cloudfront.net/note_pcs_miraizu.json"

func Handler(w http.ResponseWriter, r *http.Request) {
	res, err := http.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	defer res.Body.Close()

  json, err := io.ReadAll(res.Body)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Fprintln(w, string(json))
}