import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ArticleResponse} from '../models/ArticleResponse';
import {ArticleCategory} from '../models/ArticleCategory';

const KEY = 'pub_25111be18dd85552481643da21644ae3fe1d7'; // 'YOUR KEY';

export const articlesAPI = createApi({
  reducerPath: 'articlesAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://newsdata.io/api/1'}),
  tagTypes: ['Articles'],
  endpoints: build => ({
    getArticles: build.query<ArticleResponse, ArticleCategory>({
      query: (category: ArticleCategory = ArticleCategory.business) => ({
        url: '/latest',
        method: 'GET',
        params: {
          apikey: KEY,
          country: 'eg, fr, us',
          category: category,
          language: 'en',
          image: '1',
          domain: 'nytimes, bbc',
        },
      }),
    }),
    getSearchArticle: build.query<ArticleResponse, string>({
      query: (text: string) => ({
        url: '/latest',
        method: 'GET',
        params: {
          apikey: KEY,
          country: 'eg, fr, us',
          q: text,
          language: 'en',
          image: '1',
        },
      }),
    }),
  }),
});

export const {useGetArticlesQuery, useGetSearchArticleQuery} = articlesAPI;
