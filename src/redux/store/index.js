import { legacy_createStore as createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';

import listReducer from '../reducers';

const store = createStore(listReducer, composeWithDevTools());

export default store;
