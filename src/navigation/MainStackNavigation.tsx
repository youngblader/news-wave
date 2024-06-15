import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {BottomTabBar} from '../ui';
import {ArticleDetailsScreen} from '../screens';

import {colors} from '../styles';
import {MainStackParamsList} from './types';

const MainStackNavigator = createStackNavigator<MainStackParamsList>();

const MainStackNavigation: FC = () => {
  return (
    <MainStackNavigator.Navigator
      initialRouteName="BottomTabBar"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <MainStackNavigator.Screen
        name="BottomTabBar"
        options={{
          headerShown: false,
        }}
        component={BottomTabBar}
      />

      <MainStackNavigator.Screen
        name="ArticleDetailsScreen"
        options={{
          headerShown: false,
        }}
        component={ArticleDetailsScreen}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainStackNavigation;
