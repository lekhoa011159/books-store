const puppeteer = require('puppeteer');

async function crawler(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);

  const someImg = await page.evaluate(() => {
    let name = document.querySelectorAll('div.image_container > a > img.thumbnail');
    return [...name];
  });

  return someImg;
}

module.exports = crawler;