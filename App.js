import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {persistor, store} from './src/shared/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Routes from './src/Routes/Routes';
import Loader from './src/components/Loader';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
