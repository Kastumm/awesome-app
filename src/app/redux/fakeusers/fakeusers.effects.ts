import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, from, of, switchMap, map } from 'rxjs';
import { FakeUsersService } from 'src/app/services/fakeUsers.service';
import {
  loadFakeUsers,
  loadFakeUsersFail,
  loadFakeUsersSuccess,
} from './fakeusers.actions';

@Injectable()
export class FakeUsersEffects {
  constructor(
    private actions$: Actions,
    private fakeUsersService: FakeUsersService
  ) {}

  loadFakeUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFakeUsers),
      switchMap(() =>
        from(this.fakeUsersService.getByQuery('?results=3')).pipe(
          map((fakeUsers) =>
            loadFakeUsersSuccess({ fakeUsers: fakeUsers.results })
          ),
          catchError((error) => of(loadFakeUsersFail({ error })))
        )
      )
    )
  );
}
