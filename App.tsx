import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStackNavigation from './src/navigation/RootStackNavigation';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <RootStackNavigation />
    </SafeAreaProvider>
  );
};

export default App;
