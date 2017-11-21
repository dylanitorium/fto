import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';

import reducers from './reducers';

const persistedReducer = persistReducer({
  key: 'app',
  storage: AsyncStorage
}, reducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

