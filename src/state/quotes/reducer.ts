import { handleActions } from 'redux-actions';

import { SET_LOADING, SET_API_ERROR, SAVE_QUOTES } from './actions-types';

import { IQuotesDefaultState } from './types';

export const defaultState: IQuotesDefaultState = {
  loading: false,

  apiError: undefined,

  list: [],
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
    [SAVE_QUOTES]: (state, { payload }) => ({
      ...state,
      list: payload,
    }),
  },
  defaultState,
);
