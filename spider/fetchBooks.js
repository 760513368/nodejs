// 抓取豆瓣读书中的数据信息

const axios = require('axios').default;
const cheerio = require('cheerio');
const Book = require('../models/Book');

async function getBooksHTML() {
    const resp = await axios.get('https://book.douban.com/latest');
    // console.log(resp.data);
    return resp.data;
}

// getBooksHTML();

async function getBookLinks() {
    const html = await getBooksHTML();
    const $ = cheerio.load(html);
    const anchorElements = $('#content .grid-12-12 li a.cover');
    const links = anchorElements
        .map((i, ele) => {
            const href = ele.attribs['href'];
            return href;
        })
        .get();

    return links;
}

// getBookLinks().then(links => {
//     console.log(links);
// })

async function getBookDetail(detailURL) {
    const resp = await axios(detailURL);
    const $ = cheerio.load(resp.data);
    const name = $('h1').text().trim();
    const imgurl = $('#mainpic .nbg img').attr('src');
    const spans = $('#info span.pl');
    const authorSpan = spans.filter((i, ele) => {
        return $(ele).text().includes('作者');
    });
    const author = authorSpan.next('a').text();

    const publishSpan = spans.filter((i, ele) => {
        return $(ele).text().includes('出版年');
    });
    const publishDate = publishSpan[0].nextSibling.nodeValue.trim();


    return {
        name, 
        imgurl,
        publishDate,
        author,
    }
}

async function fetchAll() {
    const links = await getBookLinks();
    const proms = links.map(link => {
        return getBookDetail(link);
    });
    return Promise.all(proms);
}

async function saveToDB() {
    const books = await fetchAll();
    await Book.bulkCreate(books)
    console.log('books added');
}

saveToDB();