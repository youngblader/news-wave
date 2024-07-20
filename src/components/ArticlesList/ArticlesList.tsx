import React, {FC} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  ListRenderItemInfo,
} from 'react-native';

import {EmptyListView} from '../../ui';
import ArticleItem from '../ArticleItem/ArticleItem';

import {Article} from '../../models/Article';
import {ArticleDataError} from '../../models/ArticleDataError';

import {ArticlesListProps} from './types';
import {styles} from './styles';

const ArticlesList: FC<ArticlesListProps> = ({
  data,
  isLoading,
  ListHeaderComponent,
}) => {
  const renderItem = ({item}: ListRenderItemInfo<Article>) => (
    <ArticleItem item={item} />
  );

  const ListEmptyComponent = (
    <View style={styles.listEmptyContainer}>
      {isLoading ? (
        <ActivityIndicator style={styles.loader} />
      ) : (
        <EmptyListView message={ArticleDataError.noData} />
      )}
    </View>
  );

  return (
    <FlatList
      data={data}
      ListHeaderComponent={ListHeaderComponent}
      alwaysBounceVertical={false}
      contentContainerStyle={styles.flatlistInsets}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
      ItemSeparatorComponent={ItemSeparatorComponent}
      keyExtractor={item => item.article_id}
    />
  );
};

const ItemSeparatorComponent: FC = () => <View style={styles.separator} />;

export default ArticlesList;
