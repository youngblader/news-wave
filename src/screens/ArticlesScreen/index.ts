import {useState, useRef} from 'react';
import {FlatList} from 'react-native';

import {useAppNavigation} from '../../hooks';
import {useGetArticlesQuery} from '../../services/ArticlesService';

import {Article} from '../../models/Article';
import {ArticleCategory} from '../../models/ArticleCategory';

const categories = Object.values(ArticleCategory);
const currentCategory = ArticleCategory.business;

export const useArticles = () => {
  const navigation = useAppNavigation();

  const [selectedArticle, setSelectedArticle] = useState(currentCategory);
  const ref = useRef<FlatList>(null);

  const {data, isLoading} = useGetArticlesQuery(selectedArticle);

  const presentArticleDetailsScreen = (article: Article) => {
    navigation.navigate('Main', {
      screen: 'ArticleDetailsScreen',
      params: {
        article,
      },
    });
  };

  const onArticlePress = (item: ArticleCategory, index: number) => {
    setSelectedArticle(item);

    ref?.current?.scrollToIndex({
      animated: true,
      viewPosition: 0.2,
      index,
    });
  };

  return {
    ref,
    data,
    isLoading,
    categories,
    selectedArticle,
    onArticlePress,
    presentArticleDetailsScreen,
  };
};
