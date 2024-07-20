import {useAppRoute} from '../../navigation/hooks';

export const useArticleDetails = () => {
  const {
    params: {article},
  } = useAppRoute('ArticleDetails');

  const articleCreators = article?.creator ?? [];

  return {
    article,
    articleCreators,
  };
};
