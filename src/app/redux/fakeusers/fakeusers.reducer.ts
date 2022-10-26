import { createReducer, on } from '@ngrx/store';
import { IFakeUserState } from 'src/app/models/IFakeUserState';
import {
  loadFakeUsers,
  loadFakeUsersFail,
  loadFakeUsersSuccess,
} from './fakeusers.actions';

export const initialState: IFakeUserState = {
  fakeUsers: [],
  error: null,
  status: 'nostatus',
};

export const fakeUsersReducer = createReducer(
  initialState,
  on(loadFakeUsers, (state) => ({ ...state, status: 'loading' })),
  on(loadFakeUsersSuccess, (state, { fakeUsers }) => ({
    ...state,
    fakeUsers: fakeUsers,
    error: null,
    status: 'good',
  })),
  on(loadFakeUsersFail, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
