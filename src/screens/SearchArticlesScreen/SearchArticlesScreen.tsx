import React, {FC} from 'react';
import {View} from 'react-native';

import {SearchBar} from '../../ui';
import {ArticlesList} from '../../components';

import {useSearchArticles} from '.';

import {styles} from './styles';

const SearchArticlesScreen: FC = () => {
  const {data, query, setQuery} = useSearchArticles();

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.searchBarContanier}>
          <SearchBar query={query} onChange={setQuery} />
        </View>

        <ArticlesList data={data?.results ?? []} isLoading={false} />
      </View>
    </View>
  );
};

export default SearchArticlesScreen;
