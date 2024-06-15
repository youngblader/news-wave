import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {ArticleCategoryItemProps} from './types';
import {colors, hitSlop} from '../../styles';
import {styles} from './styles';

const ArticleCategoryItem: FC<ArticleCategoryItemProps> = ({
  category,
  isSelectedItem,
  onPress,
}) => {
  const backgroundStyle = isSelectedItem ? colors.mainBlue : colors.lightGray;
  const colorStyle = isSelectedItem ? colors.white : colors.gray;

  return (
    <TouchableOpacity
      hitSlop={hitSlop}
      style={[styles.categoryContainer, {backgroundColor: backgroundStyle}]}
      onPress={onPress}>
      <Text style={[styles.categoryText, {color: colorStyle}]}>{category}</Text>
    </TouchableOpacity>
  );
};

export default ArticleCategoryItem;
