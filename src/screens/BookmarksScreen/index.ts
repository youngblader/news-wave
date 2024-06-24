import {useNavigation, useSelector} from '../../hooks';
import {Article} from '../../models/Article';

export const useBookmarks = () => {
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

  return {
    articles,
    presentArticleDetailsScreen,
  };
};
