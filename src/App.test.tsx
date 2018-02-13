import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';

import { shallow, ShallowWrapper } from "enzyme";
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('An App', function() {
  // tslint:disable-next-line: no-any
  let store: any, container: ShallowWrapper<any, any>;

  beforeEach(() => {
    store = createMockStore([thunk])({});
    container = shallow(
      <Provider store={store}>
        <MemoryRouter>
          <App/>
        </MemoryRouter>
      </Provider>
    );
  });

  it('renders without crashing', () => {
    expect(container).toBeDefined();
  });
});