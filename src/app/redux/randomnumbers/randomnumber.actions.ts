import { createAction, props } from '@ngrx/store';
import { IRandomNumber } from 'src/app/models/IRandomNumber';

export const loadRandomNumbers = createAction(
  '[RANDOMNUMBERS] Load Random Numbers'
);

export const loadRandomNumbersSuccess = createAction(
  '[RANDOMNUMBERS] Load Random Numbers Successfull',
  props<{ randomNumbers: IRandomNumber[] }>()
);

export const loadRandomNumbersFail = createAction(
  '[RANDOMNUMBERS] Load Random Numbers Failed',
  props<{ error: string }>()
);
