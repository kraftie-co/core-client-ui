import { combineReducers } from 'redux';

import counterReducer from './counterSlice';
import productReducer from './productSlice';
import productsReducer from './productPageSlice';

export const combinedReducers = combineReducers({
  counter: counterReducer,
  product: productReducer,
  products: productsReducer,
});
