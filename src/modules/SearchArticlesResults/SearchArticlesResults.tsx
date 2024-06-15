import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {ArticlesList} from '../../components';
import {SearchBar} from '../../ui';

import {useDebounce, useNavigation} from '../../hooks';
import {articlesAPI} from '../../services/ArticlesService';

import {Article} from '../../models/Article';
import {SearchArticlesResultsProps} from './types';
import {styles} from './styles';

const SearchArticlesResults: FC<SearchArticlesResultsProps> = () => {
  const navigation = useNavigation();

  const [query, setQuery] = useState<string>('');
  const debounceQuery = useDebounce(query, 500);

  console.log('debounceQuery', debounceQuery);

  const {data} = articlesAPI.useFetchSearchArticleQuery(debounceQuery);

  const presentArticleDetailsScreen = (article: Article) => {
    navigation.navigate('Main', {
      screen: 'ArticleDetailsScreen',
      params: {
        article,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContanier}>
        <SearchBar query={query} onChange={setQuery} />
      </View>

      <ArticlesList
        data={data?.results ?? []}
        isLoading={false}
        onPress={presentArticleDetailsScreen}
      />
    </View>
  );
};

export default SearchArticlesResults;
