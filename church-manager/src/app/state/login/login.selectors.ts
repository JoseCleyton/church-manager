import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state';

export const selectLogin = (state: AppState) => state.login;

export const selectToken = createSelector(
  selectLogin,
  state => state.token
);
export const selectIsAdmin = createSelector(
    selectLogin,
    state => state.isAdmin
  );