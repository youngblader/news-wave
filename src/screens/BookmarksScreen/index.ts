import {useRouter} from '../../navigation/hooks';
import {useAppSelector} from '../../store/hooks';

export const useBookmarks = () => {
  const {navigateArticleDetails} = useRouter();
  const {articles} = useAppSelector(state => state.bookmarks);

  return {
    articles,
    navigateArticleDetails,
  };
};
