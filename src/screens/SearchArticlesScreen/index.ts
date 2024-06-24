import {useState} from 'react';
import {useNavigation, useDebounce} from '../../hooks';
import {articlesAPI} from '../../services/ArticlesService';

import {Article} from '../../models/Article';

export const useSearchArticles = () => {
  const navigation = useNavigation();

  const [query, setQuery] = useState<string>('');
  const debounceQuery = useDebounce(query, 500);

  const {data} = articlesAPI.useFetchSearchArticleQuery(debounceQuery);

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
