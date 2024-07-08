import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainStackNavigator from './MainStackNavigator';
import {RootStackParamsList} from '../types';
import {colors} from '../../styles';

const Stack = createStackNavigator<RootStackParamsList>();

const RootStackNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Main"
        options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: colors.white,
          },
        }}
        component={MainStackNavigator}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
