import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './store/store';
import { Navigator } from './Navigator';

const App = () => {
  const { store, persistor } = configureStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
