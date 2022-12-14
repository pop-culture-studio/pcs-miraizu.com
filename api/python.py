from http.server import BaseHTTPRequestHandler
import urllib.request

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        url = 'https://d2ttuujo1i51fi.cloudfront.net/note_pcs_miraizu.json'

        req = urllib.request.Request(url)
        with urllib.request.urlopen(req) as res:
            body = res.read()

        self.send_response(200)
        self.send_header('Content-type','application/json; charset=utf-8')
        self.end_headers()
        self.wfile.write(body.encode('utf-8'))
        return
