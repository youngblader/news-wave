import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useNavigation} from '../../hooks';

import {IMAGES} from '../../constants/images';
import {colors, hitSlop} from '../../styles';
import {styles} from './styles';
import {HeaderProps} from './types';

const Header: FC<HeaderProps> = ({
  isNavigationHeader = false,
  rightComponent = null,
}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const onDismiss = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      {isNavigationHeader ? (
        <View style={styles.headerContainer}>
          <TouchableOpacity hitSlop={hitSlop} onPress={onDismiss}>
            <FastImage style={styles.backButtonIcon} source={IMAGES.chevron} />
          </TouchableOpacity>

          {rightComponent && <View>{rightComponent}</View>}
        </View>
      ) : (
        <View style={styles.logoContainer}>
          <FastImage
            tintColor={colors.mainBlue}
            style={styles.logoImage}
            source={IMAGES.logo}
          />
          <Text style={styles.logoTitle}>News Waves</Text>
        </View>
      )}
    </View>
  );
};

export default Header;
