import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { API_URL } from '../../constants';
import request from '../../utils/request';
import { IResponse } from '../global/types';

import * as routes from '../../constants/routes';

// Global actions
import { SET_API_ERROR, SET_LOADING, SAVE_QUOTES } from './actions-types';
import { IQuotesRequest } from './types';

export const setApiError = createAction(SET_API_ERROR);
export const setLoading = createAction(SET_LOADING);

export const saveQuotes = createAction(SAVE_QUOTES);

/**
 * @function fetchQuotes
 
 * @description A function that returns a redux asynchronous action (Redux Thunk)
 * This async redux action will inturn send aa HTTP GET so that it can load all quotes for specified area
 *
 * @param username
 * @param password
 */
export const fetchQuotes =
  (body: IQuotesRequest) =>
  async (dispatch: Dispatch): Promise<IResponse | Error> => {
    try {
      // Dispatch action to set "loading: true"
      dispatch(setLoading(true));

      // Clear API Error
      dispatch(setApiError());

      // Authenticate User
      const response = await request<IResponse>(
        `${API_URL}${routes.FETCH_QUOTE}?postcode=${body.postcode}&gas=${body.gas}&electric=${body.electric}&e7=${body.e7}`,
      );

      // Remove loading
      dispatch(setLoading(false));

      if (!response.success) throw new Error(response.errors);

      dispatch(saveQuotes(response?.data));

      // return results of the request
      return response;
    } catch (e) {
      dispatch(setLoading(false));
      dispatch(setApiError(e));

      return e as Error;
    }
  };
