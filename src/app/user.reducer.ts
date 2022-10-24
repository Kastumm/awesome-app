import { IUserState } from './models/IUserState';
import { createReducer, on } from '@ngrx/store';
import { LoginAction, LogoutAction } from './user.actions';

export const initialState: IUserState = { email: '', password: '' };

export const userReducer = createReducer(
  initialState,
  on(LoginAction, (state, { payload }) => {
    console.log('payload from reducer', payload);
    return payload;
  }),
  on(LogoutAction, (state) => ({ email: '', password: '' }))
);
