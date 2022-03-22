import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchApi from '@utils/fetchApi';
import { FetchUserId, UserState } from './types';

export const fetchUserId = createAsyncThunk('user/fetchUserId', async (nickname: string) => {
  const { data } = await fetchApi<FetchUserId>(`/users/nickname/${nickname}`);
  if (!data) {
    return alert('에러가 발생했습니다. 잠시 후 다시 시도해보세요.');
  }
  return data;
});

export const user = createSlice({
  name: 'user',
  initialState: {
    data: { name: null, accessId: null, level: null },
    loading: false,
  } as UserState,
  reducers: {},
  extraReducers: {
    [fetchUserId.pending.type]: (state: UserState) => {
      state.loading = true;
    },
    [fetchUserId.fulfilled.type]: (state: UserState, action: PayloadAction<FetchUserId>) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});
