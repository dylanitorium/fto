import { applyMiddleware, combineReducers, createStore } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';

import { app}

export const store = createStore(combineReducers(), applyMiddleware(thunk), autoRehydrate());
export const persistor = persistStore(store, { key: 'app', storage: AsyncStorage });

