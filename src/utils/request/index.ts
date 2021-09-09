import merge from 'lodash/merge';
import { createAction } from 'redux-actions';

import persistedStore from '../../state/store';

export const retries = 5;

const store = persistedStore.store;

export const defaultOptions: any = {
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'GET',
};

export async function request<T = { [key: string]: any }>(
  url: string,
  options: RequestInit = {},
  fetchFn: typeof fetch = fetch,
): Promise<T> {
  try {
    const allOptions = merge({}, defaultOptions, options);
    const response = await fetchFn(url, allOptions);

    const json = await response.json();

    if (response.ok) return json;

    throw new Error(json);
  } catch (error) {
    throw new Error('Failed');
  }
}

export default request;
