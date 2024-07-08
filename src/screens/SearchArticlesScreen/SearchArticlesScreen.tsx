import React, {FC} from 'react';
import {View} from 'react-native';

import {SearchBar, Header} from '../../ui';
import {ArticlesList} from '../../components';

import {useSearchArticles} from '.';

import {styles} from './styles';

const SearchArticlesScreen: FC = () => {
  const {data, query, setQuery, navigateArticleDetails} = useSearchArticles();

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.container}>
        <View style={styles.searchBarContanier}>
          <SearchBar query={query} onChange={setQuery} />
        </View>

        <ArticlesList
          data={data?.results ?? []}
          isLoading={false}
          onPress={navigateArticleDetails}
        />
      </View>
    </View>
  );
};

export default SearchArticlesScreen;
