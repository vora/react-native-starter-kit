import { combineReducers, createStore } from 'redux';
import { AppState } from '~/model/Redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import { authInitialState, authReducer } from './modules/auth';

const initialState: AppState = {
  auth: authInitialState,
};

const rootReducer = combineReducers<AppState>({
  auth: authReducer,
});

// Redux persist will only persist reducers that have
// Been added to this whitelist
const persistWhitelist: Array<keyof AppState> = ['auth'];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: persistWhitelist,
};

export function configureStore() {
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(),
  );
  const persistor = persistStore(store);

  return { store, persistor };
}
