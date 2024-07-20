import React, {FC} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';

import {ArticlesList, ArticleCategoryItem} from '../../components';
import {useArticles} from '.';

import {ArticleCategory} from '../../models/ArticleCategory';
import {styles} from './styles';

const ArticlesScreen: FC = () => {
  const {ref, data, isLoading, categories, selectedArticle, onArticlePress} =
    useArticles();

  const renderItem = ({item, index}: ListRenderItemInfo<ArticleCategory>) => (
    <ArticleCategoryItem
      category={item}
      isSelectedItem={selectedArticle === item}
      onPress={() => onArticlePress(item, index)}
    />
  );

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={categories}
          ref={ref}
          horizontal={true}
          contentContainerStyle={styles.flatlistInsets}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={renderItemSeparator}
          keyExtractor={item => item}
        />
      </View>

      <View style={styles.flexContainer}>
        <ArticlesList isLoading={isLoading} data={data?.results || []} />
      </View>
    </View>
  );
};

const renderItemSeparator: FC = () => <View style={styles.separator} />;

export default ArticlesScreen;
