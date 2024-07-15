import {NavigatorScreenParams} from '@react-navigation/native';
import {Article} from '../models/Article';

type RootStackParamsList = {
  Main: NavigatorScreenParams<MainStackParamsList>;
};

type MainStackParamsList = {
  ArticleDetails: ArticleDetailsParams;
  TabBar: NavigatorScreenParams<TabBarStackParamsList>;
};

type ArticleDetailsParams = {
  article: Article;
};

type TabBarStackParamsList = {
  Articles: undefined;
  SearchArticles: undefined;
  Bookmarks: undefined;
};

type AppStackParamsList = MainStackParamsList & TabBarStackParamsList;

export type {
  RootStackParamsList,
  MainStackParamsList,
  AppStackParamsList,
  TabBarStackParamsList,
};
