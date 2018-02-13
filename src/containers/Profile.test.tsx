import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from "enzyme";
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as constants from '../constants';
import { forkProject } from '../actions';
import ConnectedProfile from './Profile';

// Snapshot for a Profile React Component
describe('A Snapshot of Profile Container', () => {
  const initialState = {
    projectState: {
      project: null
    }
  };

  // tslint:disable-next-line: no-any
  let store: any;

  it('capturing Snapshot of Profile', () => {
    store = createMockStore([thunk])(initialState);
    const renderedValue = renderer.create(<ConnectedProfile store={store} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('A React-redux Shallow Render of Profile Container + passing the {store} directly)', () => {
  const initialState = {
    projectState: {
      project: undefined
    }
  };

  // tslint:disable-next-line: no-any
  let store: any, container: ShallowWrapper<any, any>;

  beforeEach(() => {
    store = createMockStore([thunk])(initialState);
    container = shallow(<ConnectedProfile store={store} />);
  });

  it('render the connected(SMART) component', () => {
    expect(container.length).toEqual(1);
  });

  it('check Prop matches with initialState', () => {
    expect(container.prop('project')).toEqual(initialState.projectState.project);
  });

  it('check dispatched the expected actions', () => {
    return store.dispatch(forkProject('http://simple.com')).then(() => {
      const actions = store.getActions();
      expect(actions.length).toEqual(1);

      const forkAction = actions[0];
      expect(forkAction.type).toEqual(constants.FORK_PROJECT);
      expect(forkAction.project).toBeDefined();
    });
  });

});