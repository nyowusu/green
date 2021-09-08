import { combineReducers } from 'redux';

import global from './global/reducer';
import user from './user/reducer';
import messages from './messages/reducer';
import freelancer from './freelancer/reducer';
import settings from './settings/reducer';
import signup from './signup/reducer';

export const reducers = {
  global,
  user,
  freelancer,
  messages,
  settings,
  signup,
};

export default combineReducers(reducers);
