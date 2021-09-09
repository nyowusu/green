import { combineReducers } from 'redux';

import global from './global/reducer';
import user from './user/reducer';

export const reducers = {
  global,
  user,
};

export default combineReducers(reducers);
