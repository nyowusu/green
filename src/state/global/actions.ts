import { createAction } from 'redux-actions';

// Global actions
import { SET_API_ERROR, SET_LOADING } from './action-types';

export const setApiError = createAction(SET_API_ERROR);
export const setLoading = createAction(SET_LOADING);
