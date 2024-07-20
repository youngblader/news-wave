import {Article} from '../../models/Article';
import {FlatListProps} from 'react-native';

export interface ArticlesListProps extends Partial<FlatListProps<Article>> {
  data: Article[];
  isLoading: boolean;
}
