import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';

export const selectFakeUsersDataCollection = (state: IAppState) => state;

export const selectFakeUsersData = createSelector(
  selectFakeUsersDataCollection,
  (state: IAppState) => {
    return state.fakeUsers;
  }
);
