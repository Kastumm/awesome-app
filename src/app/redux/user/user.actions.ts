import { createAction, props } from '@ngrx/store';
import { IUserState } from '../../models/IUserState';

export const LoginAction = createAction(
  '[USER] Login',
  props<{ payload: IUserState }>()
);
export const LogoutAction = createAction('[USER] Logout');
