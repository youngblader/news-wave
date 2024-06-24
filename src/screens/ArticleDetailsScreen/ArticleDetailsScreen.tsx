import React, {FC} from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';

import moment from 'moment';
import FastImage from 'react-native-fast-image';

import {Header} from '../../components';

import {useArticleDetails} from '.';

import {IMAGES} from '../../constants/images';
import {styles} from './styles';
import {hitSlop} from '../../styles';

const ArticleDetailsScreen: FC = () => {
  const {article, isAddedArticle, articleCreators, addBookmark} =
    useArticleDetails();

  return (
    <View style={styles.container}>
      <Header
        isNavigationHeader={true}
        rightComponent={
          <TouchableOpacity onPress={addBookmark}>
            <FastImage
              style={styles.bookmarkIcon}
              hitSlop={hitSlop}
              source={
                isAddedArticle ? IMAGES.bookmarksSelected : IMAGES.bookmarks
              }
            />
          </TouchableOpacity>
        }
      />

      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <FastImage
          source={{uri: article?.image_url}}
          style={styles.articlePreview}
          resizeMode={'cover'}
          defaultSource={IMAGES.plug}
        />

        <View style={styles.content}>
          <Text style={styles.articleTitle}>{article?.title}</Text>

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

          <View style={styles.articleCreatorDateContainer}>
            {!!articleCreators &&
              articleCreators.map(creator => (
                <Text key={creator} style={styles.text}>{`By ${creator}`}</Text>
              ))}

            <Text style={styles.text}>
              {moment(article?.pubDate).format('L')}
            </Text>
          </View>

          <Text style={styles.articleBody}>{article?.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const renderCategorySeparator: FC = () => <View style={styles.separator} />;

export default ArticleDetailsScreen;
