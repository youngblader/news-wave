import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Article} from '../../../models/Article';
import {BookmarksArticleState} from './types';

const initialState: BookmarksArticleState = {
  articles: [],
};

const bookmarksArticleReducer = createSlice({
  name: 'bookmarksArticleReducer',
  initialState,
  reducers: {
    addBookmarkArticle(
      state: BookmarksArticleState,
      action: PayloadAction<Article>,
    ) {
      state.articles.unshift(action.payload);
    },
    removeBookmarkArticle(
      state: BookmarksArticleState,
      action: PayloadAction<Article>,
    ) {
      state.articles = state.articles.filter(
        item => item.article_id !== action.payload.article_id,
      );
    },
  },
});

export const {addBookmarkArticle, removeBookmarkArticle} =
  bookmarksArticleReducer.actions;

export default bookmarksArticleReducer.reducer;
