import React, {FC, memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import moment from 'moment';

import {ArticleItemProps} from './types';
import {IMAGES} from '../../constants/images';

import {capitalizeFirstLetter} from '../../helpers/strings';
import {styles} from './styles';

const ArticleItem: FC<ArticleItemProps> = ({item, onPress}) => {
  const articleCreators = item?.creator ?? [];
  const articleCategories = item?.category ?? [];

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FastImage
        style={styles.newsImage}
        source={{uri: item.image_url}}
        resizeMode={'cover'}
        defaultSource={IMAGES.plug}
      />

      <View style={styles.content}>
        <Text style={styles.newsTextTitle} numberOfLines={4}>
          {item.title}
        </Text>

        {!!articleCreators.length &&
          articleCreators.map(creator => {
            return (
              <Text key={creator} style={styles.text} numberOfLines={2}>
                {`By ${creator}`}
              </Text>
            );
          })}

        <View style={styles.bottomCategoryContainer}>
          <View style={styles.topicCategory}>
            {!!articleCategories.length &&
              articleCategories.map(category => {
                return (
                  <Text
                    key={category}
                    style={styles.categoryText}
                    numberOfLines={1}>
                    {capitalizeFirstLetter(category)}
                  </Text>
                );
              })}
            <View style={styles.grayCircle} />
            <Text style={styles.text}>{moment(item.pubDate).format('L')}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ArticleItem);
