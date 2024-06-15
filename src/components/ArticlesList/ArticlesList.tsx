import React, {FC} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import {ArticleItem, EmptyListView} from '../../ui';

import {ArticleDataError} from '../../models/ArticleDataError';
import {ArticlesListProps} from './types';
import {styles} from './styles';

const ArticlesList: FC<ArticlesListProps> = ({
  data,
  isLoading,
  onPress = () => {},
}) => {
  return (
    <FlatList
      data={data}
      alwaysBounceVertical={false}
      contentContainerStyle={styles.flatlistInsets}
      renderItem={({item}) => {
        return <ArticleItem item={item} onPress={() => onPress(item)} />;
      }}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          {isLoading ? (
            <ActivityIndicator style={styles.loader} />
          ) : (
            <EmptyListView message={ArticleDataError.noData} />
          )}
        </View>
      }
      ItemSeparatorComponent={renderItemSeparator}
      keyExtractor={item => item.article_id}
    />
  );
};

const renderItemSeparator: FC = () => <View style={styles.separator} />;

export default ArticlesList;
