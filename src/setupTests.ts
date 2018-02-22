import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// tslint:disable-next-line: no-any
(global as any).config = {
  puppeteerCfg: {
    headless: false
    // slowMo: 250 // slow down by 250ms
  },
  baseUrl: 'http://localhost:3000',
  timeout: 5000
};
