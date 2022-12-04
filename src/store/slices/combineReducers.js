import { combineReducers } from 'redux';

import counterReducer from './counterSlice';
import searchBarReducer from './searchBarSlice';

export const combinedReducers = combineReducers({
  counter: counterReducer,
  searchBar: searchBarReducer,
});
