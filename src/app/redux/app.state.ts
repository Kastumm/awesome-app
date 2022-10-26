import { IRandomNumberState } from '../models/IRandomNumberState';
import { IFakeUserState } from '../models/IFakeUserState';
import { IUserState } from '../models/IUserState';

export interface IAppState {
  user: IUserState;
  fakeUsers: IFakeUserState;
  randomNumbers: IRandomNumberState;
}
