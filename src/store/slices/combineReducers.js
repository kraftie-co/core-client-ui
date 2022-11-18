import { combineReducers } from 'redux';

import counterReducer from './counterSlice';

export const combinedReducers = combineReducers({
  counter: counterReducer,
});
