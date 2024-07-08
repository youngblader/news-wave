import React, {FC} from 'react';
import {View, TextInput} from 'react-native';

import FastImage from 'react-native-fast-image';

import {SearchBarProps} from './types';
import {IMAGES} from '../../constants/images';

import {colors} from '../../styles';
import {styles} from './styles';

const SearchBar: FC<SearchBarProps> = ({query, onChange}) => {
  return (
    <View style={styles.searchBarContainer}>
      <FastImage
        style={styles.searchBarIcon}
        source={IMAGES.searchInput}
        tintColor={colors.black}
      />

      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={query}
        placeholderTextColor={colors.gray}
        onChangeText={onChange}
        maxLength={40}
      />
    </View>
  );
};

export default SearchBar;
