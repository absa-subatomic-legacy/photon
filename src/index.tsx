import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import Hello from './containers/Hello';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// import { createStore } from 'redux';
// import { enthusiasm } from './reducers/index';
// import { StoreState } from './types/index';
import { configureStore } from './store';
import { Provider } from 'react-redux';

// const store = createStore<StoreState>(enthusiasm, {
//   enthusiasmLevel: 1,
//   languageName: 'TypeScript',
// });

ReactDOM.render(
  <Provider store={configureStore({})}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
