import React, {FC} from 'react';
import {ColorValue} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FastImage, {Source} from 'react-native-fast-image';

import {
  BookmarksScreen,
  ArticlesScreen,
  SearchArticlesScreen,
} from '../../screens';

import {BottomBarStackParamsList} from '../../navigation/types';
import {IMAGES} from '../../constants/images';
import {colors} from '../../styles';
import {styles} from './styles';

const BottomTabStackNavigator =
  createBottomTabNavigator<BottomBarStackParamsList>();

const BottomTabBar: FC = () => {
  return (
    <BottomTabStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTabStackNavigator.Screen
        name="ArticlesScreen"
        component={ArticlesScreen}
        options={{
          title: '',
          tabBarIcon: ({color, focused}) =>
            renderTabBarIcon(IMAGES.home, color, focused),
        }}
      />
      <BottomTabStackNavigator.Screen
        name="SearchArticlesScreen"
        component={SearchArticlesScreen}
        options={{
          title: '',
          tabBarIcon: ({color, focused}) =>
            renderTabBarIcon(IMAGES.search, color, focused),
        }}
      />
      <BottomTabStackNavigator.Screen
        name="BookmarksScreen"
        component={BookmarksScreen}
        options={{
          title: '',
          tabBarIcon: ({color, focused}) =>
            renderTabBarIcon(IMAGES.bookmarks, color, focused),
        }}
      />
    </BottomTabStackNavigator.Navigator>
  );
};

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

export default BottomTabBar;
