import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainStackNavigator from './MainStackNavigator';
import {RootStackParamsList} from '../types';

const Stack = createStackNavigator<RootStackParamsList>();

const screenOptions = {
  headerShown: false,
};

const RootScreens = {
  Main: 'Main',
} as const;

const RootStackNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={RootScreens.Main}
        options={screenOptions}
        component={MainStackNavigator}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
