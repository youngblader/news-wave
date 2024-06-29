import {useState} from 'react';
import {useAppNavigation, useDebounce} from '../../hooks';
import {useGetSearchArticleQuery} from '../../services/ArticlesService';

import {Article} from '../../models/Article';

export const useSearchArticles = () => {
  const navigation = useAppNavigation();

  const [query, setQuery] = useState<string>('');
  const debounceQuery = useDebounce(query, 500);

  const {data} = useGetSearchArticleQuery(debounceQuery);

  const presentArticleDetailsScreen = (article: Article) => {
    navigation.navigate('Main', {
      screen: 'ArticleDetailsScreen',
      params: {
        article,
      },
    });
  };

  return {
    data,
    query,
    setQuery,
    presentArticleDetailsScreen,
  };
};
