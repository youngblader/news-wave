import {useAppRoute} from '../../navigation/hooks';
import {useAppDispatch, useAppSelector} from '../../store/hooks';

import {
  removeBookmarkArticle,
  addBookmarkArticle,
} from '../../store/slices/bookmarks/slicer';

export const useAddBookmarks = () => {
  const dispatch = useAppDispatch();
  const {params} = useAppRoute('ArticleDetails');

  const {articles} = useAppSelector(state => state.bookmarks);
  const article = params?.article ?? null;

  const isAddedArticle = articles.some(
    item => item.article_id === article?.article_id,
  );

  const addBookmark = () => {
    if (isAddedArticle) {
      dispatch(removeBookmarkArticle(article));
      return;
    }
    dispatch(addBookmarkArticle(article));
  };

  return {
    isAddedArticle,
    addBookmark,
  };
};
