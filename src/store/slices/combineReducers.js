import { combineReducers } from 'redux';

import counterReducer from './counterSlice';
import productReducer from './productSlice';

export const combinedReducers = combineReducers({
  counter: counterReducer,
  product: productReducer,
});
