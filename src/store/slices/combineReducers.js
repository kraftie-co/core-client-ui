import { combineReducers } from 'redux';

import counterReducer from './counterSlice';
import productSubtypesReducer from './productSubtypesSlice';

export const combinedReducers = combineReducers({
  counter: counterReducer,
  productSubtypes: productSubtypesReducer,
});
