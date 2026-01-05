import axios from 'axios'
import * as cheerio from 'cheerio'

const html = await axios.get(`https://investidor10.com.br/acoes/bbse3/`).then(r => r.data)
const $ = cheerio.load(html)

const dy = $('.dy ._card-body > span').text()
const pl = $('.indicator-pl').text()

console.log(dy);
console.log(pl);

