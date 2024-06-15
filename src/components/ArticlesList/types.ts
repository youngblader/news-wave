import {Article} from '../../models/Article';

export interface ArticlesListProps {
  data: Article[];
  isLoading: boolean;
  onPress: (article: Article) => void;
}
