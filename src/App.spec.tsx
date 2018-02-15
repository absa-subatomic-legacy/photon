import { setup, teardown } from './chromeless';

describe('When visiting the homepage', function() {
  // tslint:disable-next-line: no-any
  let chromeless: any;

  beforeAll(() => {
    chromeless = setup();
  });

  afterAll(async function() {
    teardown(chromeless);
  });

  // test('it welcomes the user', async function () {
  //     const html = await chromeless
  //         .goto('https://www.google.com')
  //         .type('chromeless', 'input[name="q"]')
  //         .press(13)
  //         .wait('#resultStats')
  //         .evaluate(() => document!.querySelector('#resualtStats')!.innerHTML);

  //     expect(html).toMatchSnapshot();
  // });

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

  test('home renders correctly', async function() {
    const html = await chromeless
      // tslint:disable-next-line: no-any
      .goto((global as any).config.baseUrl)
      .wait('#root')
      .evaluate(() => document!.querySelector('#root')!.innerHTML);

    expect(html).toMatchSnapshot();
  });

  test('can navigates to the Profile page via Link', async function() {
    const html = await chromeless
      // tslint:disable-next-line: no-any
      .goto((global as any).config.baseUrl)
      .wait('#root')
      .click('button[data-test="goToProfile"]')
      .wait('.hello')
      .evaluate(() => document!.querySelector('.hello')!.innerHTML);

    expect(html).toMatchSnapshot();
  });

  test('can navigates to the Profile page via Redux', async function() {
    const html = await chromeless
      // tslint:disable-next-line: no-any
      .goto((global as any).config.baseUrl)
      .wait('#root')
      .click('button[data-test="goToProfile"]')
      .wait('.hello')
      .evaluate(() => document!.querySelector('.hello')!.innerHTML);

    expect(html).toMatchSnapshot();
  });

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
