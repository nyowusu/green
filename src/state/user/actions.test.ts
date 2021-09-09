import { isFSA } from 'flux-standard-action';

import { login, setApiError, setLoading } from './actions';

import { ILoginValues } from './types';

describe('User actions', () => {
  describe('clearApiError', () => {
    it('returns a standard action', () => {
      expect(isFSA(setApiError(undefined))).toBe(true);
    });
  });

  describe('setApiError', () => {
    it('returns a standard action', () => {
      expect(isFSA(setApiError())).toBe(true);
    });
  });

  describe('setLoading', () => {
    it('returns a standard action', () => {
      expect(isFSA(setLoading(false))).toBe(true);
    });
  });

  describe('login', () => {
    it('returns a thunk', () => {
      expect(typeof login({} as ILoginValues)).toBe('function');
    });
  });
});
