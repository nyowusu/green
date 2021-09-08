import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Reactotron from '../../ReactotronConfig';
import reducer from './reducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IState } from '../types/state';

let composeFn: any = compose;

if (__DEV__) composeFn = composeWithDevTools;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const getStore = (defaultState = {}) => {
  const middlewares = [thunk];

  const persistedReducer = persistReducer(persistConfig, reducer);

  let store: any = createStore(
    persistedReducer,
    defaultState,
    composeFn(applyMiddleware(...middlewares)),
  );

  if (__DEV__)
    store = createStore(
      persistedReducer,
      defaultState,
      composeFn(
        applyMiddleware(...middlewares),
        // @ts-ignore
        Reactotron.createEnhancer(),
      ),
    );

  let persistor = persistStore(store);
  return { store, persistor };
};

export const useTypedSelector: TypedUseSelectorHook<IState> = useSelector;


export default getStore();
