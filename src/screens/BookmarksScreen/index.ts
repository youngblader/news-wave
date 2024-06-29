import {Article} from '../../models/Article';
import {useAppNavigation} from '../../hooks';
import {useAppSelector} from '../../store/hooks';

export const useBookmarks = () => {
  const navigation = useAppNavigation();
  const {articles} = useAppSelector(state => state.bookmarks);

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
