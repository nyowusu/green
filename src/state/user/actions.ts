import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';

import * as actions from './action-types';

import * as routes from '../../constants/routes';

// TypeScript Types
import { ILoginValues } from './types';
import request from '../../utils/request';
import { IResponse } from '../global/types';
import { API_URL } from '../../constants';

export const setApiError = createAction(actions.SET_API_ERROR);
export const setLoading = createAction(actions.SET_LOADING);

/**
 * @function login;
 
 * @description A function that returns a redux asynchronous action (Redux Thunk)
 * This async redux action will inturn send an HTTP POST so that it can login with users username, type and callback url
 *  in a MAGIC_LINK
 *
 * @param username
 * @param password
 */
export const login =
  (body: ILoginValues) =>
  async (dispatch: Dispatch): Promise<IResponse | Error> => {
    try {
      // Dispatch action to set "loading: true"
      dispatch(setLoading(true));

      // Clear API Error
      dispatch(setApiError(undefined));

      // Authenticate User
      const response = await request<IResponse>(
        `${API_URL}${routes.LOGIN_MAGIC_LINK}`,
        {
          method: 'POST',
          body: JSON.stringify(body),
        },
      );

      // Remove loading
      dispatch(setLoading(false));

      if (!response.success) throw new Error(response.errors);

      // return results of the request
      return response;
    } catch (e) {
      dispatch(setLoading(false));

      return e as Error;
    }
  };
