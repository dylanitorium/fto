import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { NativeRouter } from 'react-router-native';
import { store, persistor } from './redux/store';
import Routes from './routes';
import Loader from './components/screens/Loader';

const App = () => (
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={<Loader />}
    >
      <NativeRouter>
          <Routes />
      </NativeRouter>
    </PersistGate>
  </Provider>
);

export default App;
