import {useAppSelector} from '../../store/hooks';

export const useBookmarks = () => {
  const {articles} = useAppSelector(state => state.bookmarks);

  return {
    articles,
  };
};
