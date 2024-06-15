import React, {FC, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';

import {ArticleCategoryItem} from '../../ui';
import ArticlesList from '../../components/ArticlesList/ArticlesList';

import {useNavigation} from '../../hooks';

import {articlesAPI} from '../../services/ArticlesService';

import {ArticleCategory} from '../../models/ArticleCategory';
import {Article} from '../../models/Article';

import {ArticleCategoriesListProps} from './types';
import {styles} from './styles';

const categories = Object.values(ArticleCategory);
const currentCategory = ArticleCategory.business;

const ArticleCategoriesList: FC<ArticleCategoriesListProps> = ({}) => {
  const navigation = useNavigation();

  const [selectedArticle, setSelectedArticle] = useState(currentCategory);
  const ref = useRef<FlatList>(null);

  const {data, isLoading} =
    articlesAPI.useFetchAllArticlesQuery(selectedArticle);

  const presentArticleDetailsScreen = (article: Article) => {
    navigation.navigate('Main', {
      screen: 'ArticleDetailsScreen',
      params: {
        article,
      },
    });
  };

  const onPress = (item: ArticleCategory, index: number) => {
    setSelectedArticle(item);

    ref?.current?.scrollToIndex({
      animated: true,
      viewPosition: 0.2,
      index,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={categories}
          ref={ref}
          horizontal={true}
          style={styles.list}
          contentContainerStyle={styles.flatlistInsets}
          renderItem={({item, index}) => {
            return (
              <ArticleCategoryItem
                category={item}
                isSelectedItem={selectedArticle === item}
                onPress={() => onPress(item, index)}
              />
            );
          }}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={renderItemSeparator}
          keyExtractor={item => item}
        />
      </View>

      <View style={styles.flexContainer}>
        <ArticlesList
          isLoading={isLoading}
          data={data?.results || []}
          onPress={presentArticleDetailsScreen}
        />
      </View>
    </View>
  );
};

const renderItemSeparator: FC = () => <View style={styles.separator} />;

export default ArticleCategoriesList;
