import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projectReducer from './project';

// tslint:disable-next-line: no-any
const rootReducer = (combineReducers as any)({
    routing: routerReducer,
    projectState: projectReducer
});

export default rootReducer;