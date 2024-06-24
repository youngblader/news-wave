import React, {FC} from 'react';
import {ColorValue, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FastImage, {Source} from 'react-native-fast-image';
import {
  ArticlesScreen,
  SearchArticlesScreen,
  BookmarksScreen,
} from '../screens';

import {IMAGES} from '../constants/images';
import {colors} from '../styles';
import {BottomBarStackParamsList} from './types';

const Stack = createBottomTabNavigator<BottomBarStackParamsList>();

const BottomTabStackSNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="ArticlesScreen"
        component={ArticlesScreen}
        options={{
          title: '',
          tabBarIcon: ({color, focused}) =>
            renderTabBarIcon(IMAGES.home, color, focused),
        }}
      />
      <Stack.Screen
        name="SearchArticlesScreen"
        component={SearchArticlesScreen}
        options={{
          title: '',
          tabBarIcon: ({color, focused}) =>
            renderTabBarIcon(IMAGES.search, color, focused),
        }}
      />
      <Stack.Screen
        name="BookmarksScreen"
        component={BookmarksScreen}
        options={{
          title: '',
          tabBarIcon: ({color, focused}) =>
            renderTabBarIcon(IMAGES.bookmarks, color, focused),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomBarIcon: {
    marginTop: 20,
    height: 24,
    width: 24,
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
    tintColor={focused ? colors.mainBlue : color}
    resizeMode={'contain'}
  />
);

export default BottomTabStackSNavigator;
