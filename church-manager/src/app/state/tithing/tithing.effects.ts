import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AppState } from '..';
import * as actions from './tithing.actions';
import * as fromAlert from '../alert';
import { EMPTY } from 'rxjs';
import { TithingService } from 'src/app/shared/service/tithing/tithing.service';

@Injectable()
export class ChristianEffects {
  constructor(
    private actions$: Actions,
    private tithingService: TithingService,
    private store$: Store<AppState>
  ) {}

  @Effect()
  listTithings$ = this.actions$.pipe(
    ofType<actions.ListTithings>(actions.TithingActionsTypes.LIST_TITHINGS),
    switchMap((action) =>
      this.tithingService.listTithings(action.dateStart, action.dateEnd).pipe(
        map(
          (response) => {
            return new actions.ListTithingsSuccess(response);
          },
          catchError((error) => {
            new fromAlert.actions.AddAlert({
              type: 'error',
              message: error.message,
            });
            return EMPTY;
          })
        )
      )
    )
  );
  @Effect()
  getTotal$ = this.actions$.pipe(
    ofType<actions.GetTotal>(actions.TithingActionsTypes.GET_TOTAL),
    switchMap(() =>
      this.tithingService.getTotal().pipe(
        map(
          (response) => {
            return new actions.GetTotalSucces(response);
          },
          catchError((error) => {
            new fromAlert.actions.AddAlert({
              type: 'error',
              message: error.message,
            });
            return EMPTY;
          })
        )
      )
    )
  );
  @Effect()
  addTithing$ = this.actions$.pipe(
    ofType<actions.AddTithing>(actions.TithingActionsTypes.ADD_TITHING),
    switchMap((action) =>
      this.tithingService.addTithing(action.tithing).pipe(
        map(
          (response) => {
            this.store$.dispatch(
              new fromAlert.actions.AddAlert({
                type: 'success',
                message: 'Dízimo pago com sucesso',
              })
            );
            return new actions.AddTithingSuccess(response);
          },
          catchError((error) => {
            new fromAlert.actions.AddAlert({
              type: 'error',
              message: error.message,
            });
            return EMPTY;
          })
        )
      )
    )
  );
}
