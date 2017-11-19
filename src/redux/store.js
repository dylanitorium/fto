import { applyMiddleware, createStore } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';

import reducers from './reducers';

export const store = createStore(reducers, applyMiddleware(thunk), autoRehydrate());
export const persistor = persistStore(store, { key: 'app', storage: AsyncStorage });

