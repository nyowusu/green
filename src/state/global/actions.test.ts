import { isFSA } from 'flux-standard-action';

import { setApiError } from './actions';

describe('Global actions', () => {
  describe('setApiError', () => {
    it('returns a standard action', () => {
      expect(isFSA(setApiError())).toBe(true);
    });
  });
});
