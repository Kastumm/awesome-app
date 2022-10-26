import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';

export const selectRandomNumbersDataCollection = (state: IAppState) => state;

export const selectRandomNumbersData = createSelector(
  selectRandomNumbersDataCollection,
  (state: IAppState) => {
    return state.randomNumbers;
  }
);
