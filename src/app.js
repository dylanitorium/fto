import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { NativeRouter } from 'react-router-native';
import { store, persistor } from './redux/store';
import Routes from './routes';
import Loader from './components/screens/Loader';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  }
});

// persistor.purge();

const App = () => (
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={<Loader />}
    >
      <NativeRouter>
        <SafeAreaView style={styles.safeArea}>
          <Routes />
        </SafeAreaView>
      </NativeRouter>
    </PersistGate>
  </Provider>
);

export default App;
