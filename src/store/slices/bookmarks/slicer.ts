import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Article} from '../../../models/Article';
import {BookmarksState} from './types';

const initialState: BookmarksState = {
  articles: [],
};

const bookmarksSlicer = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmarkArticle(state: BookmarksState, action: PayloadAction<Article>) {
      state.articles.unshift(action.payload);
    },
    removeBookmarkArticle(
      state: BookmarksState,
      action: PayloadAction<Article>,
    ) {
      state.articles = state.articles.filter(
        item => item.article_id !== action.payload.article_id,
      );
    },
  },
});

export const {addBookmarkArticle, removeBookmarkArticle} =
  bookmarksSlicer.actions;

export default bookmarksSlicer.reducer;
