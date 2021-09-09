import { handleActions } from 'redux-actions';

import { SET_LOADING, SET_API_ERROR } from './action-types';

import { IUserDefaultState } from './types';

export const defaultState: IUserDefaultState = {
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
    [SET_API_ERROR]: (state, { payload }) => ({
      ...state,
      apiError: payload,
    }),
  },
  defaultState,
);
