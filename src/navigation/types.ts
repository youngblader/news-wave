import {NavigatorScreenParams} from '@react-navigation/native';
import {Article} from '../models/Article';

type RootStackParamsList = {
  Main: NavigatorScreenParams<MainStackParamsList>;
};

type MainStackParamsList = {
  ArticleDetailsScreen: {article: Article};
  ArticlesScreen: undefined;
  SearchArticlesScreen: undefined;
  BookmarksScreen: undefined;
  BottomTabBar: NavigatorScreenParams<BottomBarStackParamsList>;
};

type BottomBarStackParamsList = {
  ArticlesScreen: undefined;
  SearchArticlesScreen: undefined;
  BookmarksScreen: undefined;
};

type AppStackParamsList = MainStackParamsList & BottomBarStackParamsList;

export type {
  RootStackParamsList,
  MainStackParamsList,
  AppStackParamsList,
  BottomBarStackParamsList,
};
// export type NavigationScreens = {
//   ArticleDetailsScreen: {article: Article};
//   ArticlesScreen: undefined;
//   SearchArticlesScreen: undefined;
//   BookmarksScreen: undefined;
// };
