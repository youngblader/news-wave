import {useState} from 'react';
import {useDebounce} from '../../hooks';

import {useGetSearchArticleQuery} from '../../services/ArticlesService';

export const useSearchArticles = () => {
  const [query, setQuery] = useState<string>('');
  const debounceQuery = useDebounce(query, 500);

  const {data} = useGetSearchArticleQuery(debounceQuery);

  return {
    data,
    query,
    setQuery,
  };
};
