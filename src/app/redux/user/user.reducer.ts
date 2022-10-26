import { createReducer, on } from '@ngrx/store';
import { IUserState } from 'src/app/models/IUserState';
import { LoginAction, LogoutAction } from './user.actions';

export const initialState: IUserState = { email: '', password: '' };

export const userReducer = createReducer(
  initialState,
  on(LoginAction, (state, { payload }) => payload),
  on(LogoutAction, (state) => ({ email: '', password: '' }))
);
