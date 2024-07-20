import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {ArticleCategoryItemProps} from './types';
import {colors, hitSlop} from '../../styles';
import {styles} from './styles';

const ArticleCategoryItem: FC<ArticleCategoryItemProps> = ({
  category,
  isSelectedItem,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      hitSlop={hitSlop}
      style={[
        styles.categoryContainer,
        {backgroundColor: isSelectedItem ? colors.primary : colors.lightGray},
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.categoryText,
          {color: isSelectedItem ? colors.white : colors.gray},
        ]}>
        {category}
      </Text>
    </TouchableOpacity>
  );
};

export default ArticleCategoryItem;
