import { setIsInitialLanguageSet } from './actions';
import userReducer, { defaultState } from './reducer';

describe('Global reducer', () => {
  describe('SET_INITIAL_LANGUAGE', () => {
    it('toggles on that language is set on first load of app', () => {
      const payload = true;

      expect(
        userReducer({ ...defaultState }, setIsInitialLanguageSet(payload)),
      ).toEqual({
        ...defaultState,
        isInitialLanguageSet: true,
      });
    });

    it('toggles of that language is not set on first load of app', () => {
      const payload = false;

      expect(
        userReducer({ ...defaultState }, setIsInitialLanguageSet(payload)),
      ).toEqual({
        ...defaultState,
        isInitialLanguageSet: false,
      });
    });
  });
});
