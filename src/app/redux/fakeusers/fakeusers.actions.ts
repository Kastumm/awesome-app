import { createAction, props } from '@ngrx/store';
import { IFakeUser } from 'src/app/models/IFakeUser';

export const loadFakeUsers = createAction('[FAKEUSERS] Load Fake Users');

export const loadFakeUsersSuccess = createAction(
  '[FAKEUSERS] Load Fake Users Successful',
  props<{ fakeUsers: IFakeUser[] }>()
);

export const loadFakeUsersFail = createAction(
  '[FAKEUSERS] Load Fake Users Failed',
  props<{ error: string }>()
);
