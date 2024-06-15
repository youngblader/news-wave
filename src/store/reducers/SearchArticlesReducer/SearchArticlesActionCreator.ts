import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ArticleResponse} from '../../../models/ArticleResponse';

export const fetchSearchArticles = createAsyncThunk(
  'late/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ArticleResponse>(
        'https://newsdata.io/api/1',
      );

      return response.data.results ?? [];
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  },
);
