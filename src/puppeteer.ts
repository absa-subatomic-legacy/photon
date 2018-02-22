const puppeteer = require('puppeteer');

export const setup = async () => {
  // tslint:disable-next-line
  console.log('Setup Puppeteer');
  // expect.extend({ toMatchImageSnapshot });
  // tslint:disable-next-line: no-any
  // setTimeout((global as any).config.timeout);
  // tslint:disable-next-line: no-any
  return await puppeteer.launch({});
  // return new Chromeless((global as any).config.chromeless);
};

// tslint:disable-next-line: no-any
export const teardown = async (puppeteerInst: any) => {
  try {
    await puppeteerInst.close();
  } catch (err) {
    // tslint:disable-next-line
    console.log(err);
  }
};
