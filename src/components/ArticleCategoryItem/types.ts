import {ArticleCategory} from '../../models/ArticleCategory';

export interface ArticleCategoryItemProps {
  category: ArticleCategory;
  onPress?: () => void;
  isSelectedItem: boolean;
}
