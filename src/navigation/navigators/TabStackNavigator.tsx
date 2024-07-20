/* eslint-disable react/no-unstable-nested-components */
import React, {FC} from 'react';
import {ColorValue, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FastImage, {Source} from 'react-native-fast-image';

import {Header} from '../../ui';
import {
  ArticlesScreen,
  SearchArticlesScreen,
  BookmarksScreen,
} from '../../screens';

import {TabBarStackParamsList} from '../types';
import {IMAGES} from '../../constants/images';
import {colors} from '../../styles';

const Stack = createBottomTabNavigator<TabBarStackParamsList>();

const TabScreens = {
  Articles: 'Articles',
  SearchArticles: 'SearchArticles',
  Bookmarks: 'Bookmarks',
} as const;

const TabStackNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={TabScreens.Articles}
        component={ArticlesScreen}
        options={{
          headerShown: true,
          title: '',
          tabBarIcon: ({color, focused}) =>
            renderTabBarIcon(IMAGES.home, color, focused),
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name={TabScreens.SearchArticles}
        component={SearchArticlesScreen}
        options={{
          title: '',
          headerShown: true,
          tabBarIcon: ({color, focused}) =>
            renderTabBarIcon(IMAGES.search, color, focused),
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name={TabScreens.Bookmarks}
        component={BookmarksScreen}
        options={{
          headerShown: true,
          title: '',
          tabBarIcon: ({color, focused}) =>
            renderTabBarIcon(IMAGES.bookmarks, color, focused),
          header: () => <Header />,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomBarIcon: {
    marginTop: 20,
    height: 22,
    width: 22,
  },
});

const renderTabBarIcon = (
  iconName: number | Source,
  color: ColorValue,
  focused: boolean,
) => (
  <FastImage
    source={iconName}
    style={styles.bottomBarIcon}
    tintColor={focused ? colors.primary : color}
    resizeMode={'contain'}
  />
);

export default TabStackNavigator;
