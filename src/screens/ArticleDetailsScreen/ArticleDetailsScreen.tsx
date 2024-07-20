import React, {FC} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';

import Animated, {FadeIn, FadeInLeft} from 'react-native-reanimated';
import moment from 'moment';
import FastImage from 'react-native-fast-image';

import {useArticleDetails} from '.';

import {styles} from './styles';

const ArticleDetailsScreen: FC = () => {
  const {article, articleCreators} = useArticleDetails();

  return (
    <View style={styles.container}>
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <Animated.View entering={FadeIn.duration(400).delay(300)}>
          <FastImage
            source={{uri: article?.image_url}}
            style={styles.articlePreview}
            resizeMode={'cover'}
          />
        </Animated.View>

        <View style={styles.content}>
          <Animated.Text
            entering={FadeInLeft.duration(400).delay(400)}
            style={styles.articleTitle}>
            {article?.title}
          </Animated.Text>

          <FlatList
            data={article?.category}
            horizontal={true}
            alwaysBounceHorizontal={false}
            renderItem={({item}) => {
              return (
                <View style={styles.articleCategory}>
                  <Text style={styles.articleCategoryText} numberOfLines={1}>
                    {item}
                  </Text>
                </View>
              );
            }}
            ItemSeparatorComponent={renderCategorySeparator}
            keyExtractor={item => item}
          />

          <Animated.View
            entering={FadeInLeft.duration(500).delay(600)}
            style={styles.articleCreatorDateContainer}>
            {!!articleCreators &&
              articleCreators.map(creator => (
                <Text
                  key={creator}
                  style={styles.creator}
                  numberOfLines={1}>{`By ${creator}`}</Text>
              ))}

            <Text style={styles.text}>
              {moment(article?.pubDate).format('LL')}
            </Text>
          </Animated.View>

          <Animated.Text
            entering={FadeInLeft.duration(500).delay(800)}
            style={styles.articleBody}>
            {article?.description}
          </Animated.Text>
        </View>
      </ScrollView>
    </View>
  );
};

const renderCategorySeparator: FC = () => <View style={styles.separator} />;

export default ArticleDetailsScreen;
