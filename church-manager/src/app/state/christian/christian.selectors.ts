import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state';

export const selectChristian = (state: AppState) => state.christian;

export const selectChristians = createSelector(
  selectChristian,
  (state) => state.christians
);

export const selectSelectedChristian = createSelector(
  selectChristian,
  (state) => state.selectedChristian
);
