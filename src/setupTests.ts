import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

// tslint:disable-next-line: no-any
(global as any).config = {
  chromeless: {},
  baseUrl: 'http://localhost:3000',
  timeout: 10000
};

Enzyme.configure({ adapter: new Adapter() });
