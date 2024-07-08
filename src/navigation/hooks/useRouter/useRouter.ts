import {Article} from '../../../models/Article';
import {useAppNavigation} from '../useAppNavigation/useAppNavigation';

interface Router {
  goBack: () => void;
  navigateArticleDetails: (article: Article) => void;
}

export const useRouter = (): Router => {
  const navigation = useAppNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const navigateArticleDetails = (article: Article) => {
    navigation.navigate('Main', {
      screen: 'ArticleDetailsScreen',
      params: {
        article,
      },
    });
  };

  return {
    goBack,
    navigateArticleDetails,
  };
};
