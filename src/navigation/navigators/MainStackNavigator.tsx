/* eslint-disable react/no-unstable-nested-components */
import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Header} from '../../ui';

import {ArticleDetailsScreen} from '../../screens';
import TabStackNavigator from './TabStackNavigator';

import {MainStackParamsList} from '../types';
import {colors} from '../../styles';

const Stack = createStackNavigator<MainStackParamsList>();

const screenOptions = {
  headerShown: false,
};

const MainScreens = {
  TabBar: 'TabBar',
  ArticleDetails: 'ArticleDetails',
} as const;

const MainStackNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <Stack.Screen
        name={MainScreens.TabBar}
        options={screenOptions}
        component={TabStackNavigator}
      />

      <Stack.Screen
        name={MainScreens.ArticleDetails}
        options={{
          headerShown: true,
          header: () => <Header isNavigationHeader={true} />,
        }}
        component={ArticleDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
