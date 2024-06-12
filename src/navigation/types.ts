import {NavigatorScreenParams} from '@react-navigation/native';
import {Article} from '../models/Article';

export type RootStackParamsList = {
  Main: NavigatorScreenParams<MainStackParamsList>;
};

export type MainStackParamsList = {
  ArticleDetailsScreen: {article: Article};
  BottomTabBar: NavigatorScreenParams<BottomBarStackParamsList>;
};

export type BottomBarStackParamsList = {
  ArticlesScreen: undefined;
  SearchArticlesScreen: undefined;
  BookmarksScreen: undefined;
};

export type NavigationScreens = {
  ArticleDetailsScreen: {article: Article};
  ArticlesScreen: undefined;
  SearchArticlesScreen: undefined;
  BookmarksScreen: undefined;
};
