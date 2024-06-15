import React, {FC} from 'react';
import {ArticlesList} from '../../components';
import {useNavigation, useSelector} from '../../hooks';

import {Article} from '../../models/Article';
import {BookmarksArticlesListProps} from './types';

const BookmarksArticlesList: FC<BookmarksArticlesListProps> = () => {
  const navigation = useNavigation();
  const {articles} = useSelector(state => state.bookmarksArticleReducer);

  const presentArticleDetailsScreen = (article: Article) => {
    navigation.navigate('Main', {
      screen: 'ArticleDetailsScreen',
      params: {
        article,
      },
    });
  };

  return (
    <ArticlesList
      data={articles}
      isLoading={false}
      onPress={presentArticleDetailsScreen}
    />
  );
};

export default BookmarksArticlesList;
