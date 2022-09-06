// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios')
const cheerio = require('cheerio')
export default async function handler(req, res) {
  let url = req.query.url
  if (!url?.trim()) {
    return res.status(400).json({ message: 'Empty url' })
  }
  if (!(url.slice(0, 8) === 'https://' || url.slice(0, 7) === 'http://')) {
    url = 'http://' + url
  }
  const response = await axios.get(url)
  // return
  const $ = cheerio.load(response.data);
  const property = {
    title: $('title').text() || $('meta[property="og:title"]').attr('content'),
    description: $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content'),
    imageUrl: $('meta[property="og:image"]').attr('content') || $('meta[property="twitter:image"]').attr('content'),
  }
  res.status(200).json({ data: property })
}
