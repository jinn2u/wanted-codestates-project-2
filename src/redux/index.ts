import { configureStore } from '@reduxjs/toolkit';
import { matches } from './matches';
import { MatchesState } from './matches/types';
import { user } from './user';
import { UserState } from './user/types';

export const store = configureStore({
  reducer: {
    user: user.reducer,
    matches: matches.reducer,
  },
});

export type RootState = { user: UserState; matches: MatchesState };
