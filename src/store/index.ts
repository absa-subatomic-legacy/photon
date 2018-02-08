import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

// tslint:disable-next-line: no-any
const configureStore = (preloadedState: any) =>
  createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(/*logger, */thunk)));

export { configureStore };