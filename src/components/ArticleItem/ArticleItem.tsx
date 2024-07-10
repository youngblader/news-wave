import React, {FC} from 'react';
import {View, Text, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Gesture, GestureDetector} from 'react-native-gesture-handler';

import Animated, {
  Easing,
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import moment from 'moment';

import {ArticleItemProps} from './types';

import {capitalizeFirstLetter} from '../../helpers/strings';
import {styles} from './styles';

const ArticleItem: FC<ArticleItemProps> = ({item, onPress = () => {}}) => {
  const articleCreators = item?.creator ?? [];
  const articleCategories = item?.category ?? [];

  const scaleAnimation = useSharedValue(1);

  const pan = Gesture.Pan()
    .onBegin(() => {
      scaleAnimation.value = withTiming(0.94, {
        duration: 150,
        easing: Easing.linear,
      });
    })
    .onFinalize(() => {
      scaleAnimation.value = withTiming(1, {
        duration: 150,
        easing: Easing.linear,
      });
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{scale: scaleAnimation.value}],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={animatedStyles}
        entering={FadeIn.duration(400).delay(400)}>
        <Pressable style={styles.container} onPress={onPress}>
          <FastImage
            style={styles.newsImage}
            source={{uri: item.image_url}}
            resizeMode={FastImage.resizeMode.cover}>
            <View style={styles.categoryContainer}>
              {articleCategories.length &&
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
            </View>
          </FastImage>

          <View style={styles.content}>
            <Text style={styles.newsTextTitle} numberOfLines={3}>
              {item.title}
            </Text>

            <View style={styles.bottomCategoryContainer}>
              <View style={styles.creatorContainer}>
                {!!articleCreators.length &&
                  articleCreators.map(creator => {
                    return (
                      <Text
                        key={creator}
                        style={styles.creator}
                        numberOfLines={1}>
                        {`By ${creator}`}
                      </Text>
                    );
                  })}
              </View>

              <View style={styles.dateContainer}>
                <Text style={styles.text}>
                  {moment(item.pubDate).format('LL')}
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      </Animated.View>
    </GestureDetector>
  );
};

export default ArticleItem;
