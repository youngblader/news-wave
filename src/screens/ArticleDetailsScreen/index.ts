import {useAppRoute} from '../../hooks';
import {useAppDispatch, useAppSelector} from '../../store/hooks';

import {
  removeBookmarkArticle,
  addBookmarkArticle,
} from '../../store/slices/bookmarks/slicer';

export const useArticleDetails = () => {
  const dispatch = useAppDispatch();
  const {
    params: {article},
  } = useAppRoute('ArticleDetailsScreen');

  const {articles} = useAppSelector(state => state.bookmarks);

  const articleCreators = article?.creator ?? [];

  const isAddedArticle = articles
    .map(item => item.article_id)
    .includes(article?.article_id ?? '');

  const addBookmark = () => {
    if (isAddedArticle) {
      dispatch(removeBookmarkArticle(article));
      return;
    }
    dispatch(addBookmarkArticle(article));
  };

  return {
    article,
    isAddedArticle,
    articleCreators,
    addBookmark,
  };
};
