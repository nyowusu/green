import { combineReducers } from 'redux';

import global from './global/reducer';
import user from './user/reducer';
import quotes from './quotes/reducer';

export const reducers = {
  global,
  user,
  quotes,
};

export default combineReducers(reducers);
