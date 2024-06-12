import {Article} from './Article';

export type ArticleResponse = {
  status: string;
  totalResults: number;
  results: Article[];
  nextPage: string;
};
