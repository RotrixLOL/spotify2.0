/* eslint-disable no-undef */
const puppeteer = require('puppeteer');

describe('Browser testing', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      defaultViewport: { width: 1920, height: 1080 },
    });
    page = await browser.newPage();
  });

  it('make a screenshot', async () => {
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentload' });
    // await page.waitForTimeout(2000);
    await page.screenshot({ path: 'screenshot.png' });
  });

  afterAll(async () => {
    await browser.close();
  });
});
