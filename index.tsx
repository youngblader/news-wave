import React, {FC} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';

import App from './App';

import {persistor, store} from './src/store/store/store';
import {name as appName} from './app.json';

const AppContainer: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
