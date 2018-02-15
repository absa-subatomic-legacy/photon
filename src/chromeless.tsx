import { Chromeless } from 'chromeless';
// tslint:disable-next-line
const { toMatchImageSnapshot } = require('jest-image-snapshot');
import * as fs from 'fs';

export const setup = () => {
  expect.extend({ toMatchImageSnapshot });
  // tslint:disable-next-line: no-any
  setTimeout((global as any).config.timeout);
  // tslint:disable-next-line: no-any
  return new Chromeless((global as any).config.chromeless);
};

// tslint:disable-next-line: no-any
export const teardown = async (chromeless: Chromeless<any>) => {
  try {
    await chromeless.end();
  } catch (err) {
    // tslint:disable-next-line
    console.log(err);
  }
};

export const getFile = (path: string) => Promise.resolve(fs.readFileSync(path));
