const url = 'https://d2ttuujo1i51fi.cloudfront.net/note_pcs_miraizu.json';

export default async function (req, response) {
    const res = await fetch(url);

    const data = await res.json();

    response.setHeader('Content-Type', 'application/json; charset=utf-8').send(data);
}
