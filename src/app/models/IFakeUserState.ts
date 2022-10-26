import { IFakeUser } from './IFakeUser';

export interface IFakeUserState {
  fakeUsers: IFakeUser[];
  error: string | null;
  status: string;
}
