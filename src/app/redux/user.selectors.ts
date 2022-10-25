import { createSelector } from '@ngrx/store';
import { IAppState } from './app.state';

export const selectUserData = (state: IAppState) => state;

export const selectUserEmail = createSelector(
  selectUserData,
  (state: IAppState) => {
    return state.user.email;
  }
);
