import React, {FC} from 'react';
import {AppRegistry} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import App from './App';

import {Provider} from 'react-redux';
import {createStore} from './src/store/store';

import {name as appName} from './app.json';

const AppContainer: FC = () => {
  const store = createStore();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
