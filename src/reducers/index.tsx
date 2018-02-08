import { combineReducers } from 'redux';

import enthusiasm from './enthusiasm';

// tslint:disable-next-line: no-any
const rootReducer = (combineReducers as any)({
    enthusiasm,
});

export default rootReducer;