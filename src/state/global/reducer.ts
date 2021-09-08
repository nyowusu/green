import { handleActions } from 'redux-actions';

// Global actions
import { SET_API_ERROR, SET_LOADING } from './action-types';

import { IDefaultState } from './types';

export const defaultState: IDefaultState = {
  loading: false,
  apiError: undefined,
};

// @ts-ignore
export default handleActions(
  {
    [SET_LOADING]: (state, { payload = false }) => ({
      ...state,
      loading: payload,
    }),
    [SET_API_ERROR]: (state, { payload = undefined }) => ({
      ...state,
      apiError: payload,
    }),
  },
  defaultState,
);
