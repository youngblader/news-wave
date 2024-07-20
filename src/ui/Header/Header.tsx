import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useRouter} from '../../navigation/hooks';
import {useAddBookmarks} from '../../hooks/useAddBookmarks';

import {IMAGES} from '../../constants/images';
import {colors, hitSlop} from '../../styles';
import {styles} from './styles';
import {HeaderProps} from './types';

const Header: FC<HeaderProps> = ({
  isNavigationHeader = false,
  rightComponent = null,
}) => {
  const {isAddedArticle, addBookmark} = useAddBookmarks();
  const {goBack} = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      {isNavigationHeader ? (
        <View style={styles.headerContainer}>
          <TouchableOpacity hitSlop={hitSlop} onPress={goBack}>
            <FastImage style={styles.backButtonIcon} source={IMAGES.chevron} />
          </TouchableOpacity>

          {rightComponent ? (
            <View>{rightComponent}</View>
          ) : (
            <TouchableOpacity onPress={addBookmark}>
              <FastImage
                style={styles.bookmarkIcon}
                hitSlop={hitSlop}
                source={
                  isAddedArticle ? IMAGES.bookmarksSelected : IMAGES.bookmarks
                }
              />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View style={styles.logoContainer}>
          <FastImage
            tintColor={colors.primary}
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
