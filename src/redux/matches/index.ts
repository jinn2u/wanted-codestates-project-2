import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchApi from '@utils/fetchApi';
import { FetchGetMatches, MatchesState } from './types';

export const fetchGetMatches = createAsyncThunk('match', async (accessId: string) => {
  const { data } = await fetchApi<FetchGetMatches>(`users/${accessId}/matches`);
  if (!data) {
    return alert('에러가 발생했습니다. 잠시 후 다시 시도해보세요.');
  }
  return data;
});

export const matches = createSlice({
  name: 'matches',
  initialState: {
    data: [],
    loading: false,
  } as MatchesState,
  reducers: {},
  extraReducers: {
    [fetchGetMatches.pending.type]: (state: MatchesState) => {
      state.loading = true;
    },
    [fetchGetMatches.fulfilled.type]: (
      state: MatchesState,
      action: PayloadAction<FetchGetMatches>,
    ) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});
