import { createReducer, on } from '@ngrx/store';
import { IRandomNumberState } from 'src/app/models/IRandomNumberState';

import {
  loadRandomNumbers,
  loadRandomNumbersFail,
  loadRandomNumbersSuccess,
} from './randomnumber.actions';

export const initialState: IRandomNumberState = {
  randomNumbers: [],
  error: null,
  status: 'nostatus',
};

export const randomNumbersReducer = createReducer(
  initialState,
  on(loadRandomNumbers, (state) => ({ ...state, status: 'loading' })),
  on(loadRandomNumbersSuccess, (state, { randomNumbers }) => ({
    ...state,
    randomNumbers: randomNumbers,
    error: null,
    status: 'good',
  })),
  on(loadRandomNumbersFail, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
