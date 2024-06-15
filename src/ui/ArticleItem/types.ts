import {Article} from '../../models/Article';

export interface ArticleItemProps {
  item: Article;
  onPress?: () => void;
}
