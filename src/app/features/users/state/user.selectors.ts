import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from 'src/app/models/user.state';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>(
  fromUser.userFeatureKey
);

export const selectStateUsers = createSelector(
  selectUserState,
  (state) => state.users
)

export const selectStateCargando = createSelector(
  selectUserState,
  (state) => state.loading
)