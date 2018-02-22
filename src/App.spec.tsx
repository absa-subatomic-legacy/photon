// tslint:disable-next-line
const puppeteer = require('puppeteer');
// tslint:disable-next-line
const { timeout, baseUrl, puppeteerCfg } = (global as any).config;

describe('When visiting the homepage', function() {
  // tslint:disable-next-line: no-any
  let browser: any;
  // tslint:disable-next-line: no-any
  let page: any;

  beforeAll(async () => {
    browser = await puppeteer.launch(puppeteerCfg);
    page = await browser.newPage();
    page.on('error', (err: Error) => {
      // tslint:disable-next-line
      console.error('Page', err);
    });
    page.on('pageerror', (err: Error) => {
      // tslint:disable-next-line
      console.error('pageerror', err);
    });
  }, timeout);

  afterAll(async () => {
    await page.close();
    await browser.close();
  });

  // test('it welcomes the user', async () => {
  //     await page.goto('https://google.com');
  //     await page.type('input[name="q"]', 'chromeless');
  //     await page.keyboard.press('Enter');
  //     await page.waitFor('#resultStats');
  //     let text = await page.$eval('#resultStats', (resultStats: HTMLElement) => {
  //         return resultStats.innerHTML;
  //     });
  //     expect(text).toMatchSnapshot();
  // });

  test('home renders correctly (visual)', async () => {
    // tslint:disable-next-line
    console.log('1', baseUrl);
    await page.goto(baseUrl);
    // tslint:disable-next-line
    console.log('2');
    await page.waitFor('.App-intro');
    // tslint:disable-next-line
    console.log('3');
    let screenshot = await page.screenshot({
      path: './__snapshots__/home.png'
    });
    // tslint:disable-next-line
    console.log('4', screenshot);
    // tslint:disable-next-line
    // (expect(screenshot) as any).toMatchImageSnapshot();
  });

  // test('home renders correctly (visual)', async () => {
  //     const screenshotPath: string = await chromeless
  //         // tslint:disable-next-line: no-any
  //         .goto((global as any).config.baseUrl)
  //         .wait('.App-intro')
  //         .screenshot();

  //     const screenshot = await getFile(screenshotPath);
  //     // tslint:disable-next-line
  //     (expect(screenshot) as any).toMatchImageSnapshot();
  // });

  // test('home renders correctly', async function () {
  //     const html = await chromeless
  //         // tslint:disable-next-line: no-any
  //         .goto((global as any).config.baseUrl)
  //         .wait('#root')
  //         .evaluate(() => document!.querySelector('#root')!.innerHTML);

  //     expect(html).toMatchSnapshot();
  // });

  // test('can navigates to the Profile page via Link', async function () {
  //     const html = await chromeless
  //         // tslint:disable-next-line: no-any
  //         .goto((global as any).config.baseUrl)
  //         .wait('#root')
  //         .click('button[data-test="goToProfile"]')
  //         .wait('.hello')
  //         .evaluate(() => document!.querySelector('.hello')!.innerHTML);

  //     expect(html).toMatchSnapshot();
  // });

  // test('can navigates to the Profile page via Redux', async function () {
  //     const html = await chromeless
  //         // tslint:disable-next-line: no-any
  //         .goto((global as any).config.baseUrl)
  //         .wait('#root')
  //         .click('button[data-test="goToProfile"]')
  //         .wait('.hello')
  //         .evaluate(() => document!.querySelector('.hello')!.innerHTML);

  //     expect(html).toMatchSnapshot();
  // });

  // test('can fork the project and display it on home page', async function () {
  //     const html = await chromeless
  //         // tslint:disable-next-line: no-any
  //         .goto(`${(global as any).config.baseUrl}/profile/react`)
  //         .wait('.hello')
  //         // Click on Fork the Project button
  //         .exists('[data-test="forkTheProject"]')
  //         .click('[data-test="forkTheProject"]')
  //         .wait(1000)
  //         // Click on Home link to navigates to the Home page
  //         .click('[data-test="linkHome"]')
  //         .evaluate(() => document!.querySelector('.hello')!.innerHTML);

  //     expect(html).toMatchSnapshot();
  // });

  // test('can fork the project and display it on home page', async function () {
  //     const html = await chromeless
  //         // tslint:disable-next-line: no-any
  //         .goto((global as any).config.baseUrl)
  //         .wait('#root')
  //         // Click on Got To Profile button
  //         .click('button[data-test="goToProfileViaRedux"]')
  //         // Wait redirect to Profile page and find the hello class
  //         .wait(1000)
  //         .exists('.hello')
  //         // Click on Fork the Project button
  //         .exists('button[data-test="forkTheProject"]')
  //         // .click('button[data-test="forkTheProject"]')
  //         // .wait(1000)
  //         .evaluate(() => document.querySelector('.hello')!.innerHTML);
  //         // // Click on Home link to navigates to the Home page
  //         // .click('button[data-test="linkHome"]')
  //         // // Find the ProfileView about forked project on Home page
  //         // .wait(1000)
  //         // .wait('.project')
  //         // .evaluate(() => document!.querySelector('.project')!.innerHTML);

  //     expect(html).toMatchSnapshot();
  // });
});
