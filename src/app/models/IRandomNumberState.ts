import { IRandomNumber } from './IRandomNumber';

export interface IRandomNumberState {
  randomNumbers: IRandomNumber[];
  error: string | null;
  status: string;
}
