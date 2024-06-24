import {useDispatch, useRoute, useSelector} from '../../hooks';
import {
  addBookmarkArticle,
  removeBookmarkArticle,
} from '../../store/reducers/BookmarksArticleReducer/bookmarksReducer';

export const useArticleDetails = () => {
  const dispatch = useDispatch();
  const {
    params: {article},
  } = useRoute('ArticleDetailsScreen');

  const {articles} = useSelector(state => state.bookmarksArticleReducer);

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
