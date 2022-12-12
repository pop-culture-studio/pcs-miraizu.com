require 'net/http'
require 'uri'

Handler = Proc.new do |req, res|
  url = 'https://d2ttuujo1i51fi.cloudfront.net/note_pcs_miraizu.json'

  res.status = 200
  res['Content-Type'] = 'application/json; charset=utf-8'
  res.body = Net::HTTP.get(URI.parse(uri))
end
