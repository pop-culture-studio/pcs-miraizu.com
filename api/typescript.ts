import type {VercelRequest, VercelResponse} from '@vercel/node';

const url: string = 'https://d2ttuujo1i51fi.cloudfront.net/note_pcs_miraizu.json';

export default async function (req: VercelRequest, response: VercelResponse) {
    const res: Response = await fetch(url);

    const data: string = await res.json();

    response.setHeader('Content-Type', 'application/json; charset=utf-8').send(data);
}
