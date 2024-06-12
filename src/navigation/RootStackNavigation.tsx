import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainStacNavigation from './MainStackNavigation';
import {RootStackParamsList} from './types';
import {colors} from '../styles';

const RootStackNavigator = createStackNavigator<RootStackParamsList>();

const RootStackNavigation: FC = () => {
  return (
    <RootStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStackNavigator.Screen
        name="Main"
        options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: colors.white,
          },
        }}
        component={MainStacNavigation}
      />
    </RootStackNavigator.Navigator>
  );
};

export default RootStackNavigation;
