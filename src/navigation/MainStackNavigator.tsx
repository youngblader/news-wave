import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ArticleDetailsScreen} from '../screens';
import BottomTabStackSNavigator from './BottomTabStackNavigator';

import {colors} from '../styles';
import {MainStackParamsList} from './types';

const Stack = createStackNavigator<MainStackParamsList>();

const MainStackNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabBar"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <Stack.Screen
        name="BottomTabBar"
        options={{
          headerShown: false,
        }}
        component={BottomTabStackSNavigator}
      />

      <Stack.Screen
        name="ArticleDetailsScreen"
        options={{
          headerShown: false,
        }}
        component={ArticleDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
