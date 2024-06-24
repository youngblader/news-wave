import {useState, useRef} from 'react';
import {FlatList} from 'react-native';

import {useNavigation} from '../../hooks';

import {articlesAPI} from '../../services/ArticlesService';

import {Article} from '../../models/Article';
import {ArticleCategory} from '../../models/ArticleCategory';

const categories = Object.values(ArticleCategory);
const currentCategory = ArticleCategory.business;

export const useArticles = () => {
  const navigation = useNavigation();

  const [selectedArticle, setSelectedArticle] = useState(currentCategory);
  const ref = useRef<FlatList>(null);

  const {data, isLoading} =
    articlesAPI.useFetchAllArticlesQuery(selectedArticle);

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
