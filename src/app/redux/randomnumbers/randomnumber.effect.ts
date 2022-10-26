import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, from, of, switchMap, map } from 'rxjs';
import { RandomService } from 'src/app/services/random.service';
import {
  loadRandomNumbers,
  loadRandomNumbersFail,
  loadRandomNumbersSuccess,
} from './randomnumber.actions';

@Injectable()
export class RandomNumbersEffects {
  constructor(
    private actions$: Actions,
    private randomNumbersService: RandomService
  ) {}

  loadRandomNumbers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRandomNumbers),
      switchMap(() =>
        from(
          this.randomNumbersService.getByPath('number/random_number?size=50')
        ).pipe(
          map((randomNumbers) =>
            loadRandomNumbersSuccess({ randomNumbers: randomNumbers })
          ),
          catchError((error) => of(loadRandomNumbersFail({ error })))
        )
      )
    )
  );
}
