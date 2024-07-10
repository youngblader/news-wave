import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';

import RootStackNavigator from '../navigation/navigators/RootStackNavigator';

import {persistor, store} from '../store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GestureHandlerRootView>
          <NavigationContainer>
            <SafeAreaProvider>
              <RootStackNavigator />
            </SafeAreaProvider>
          </NavigationContainer>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
