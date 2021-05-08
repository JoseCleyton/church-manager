import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { merge, of } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
  delay,
  tap,
  mergeMap,
} from 'rxjs/operators';
import * as actions from './alert.actions';

@Injectable()
export class AlertEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  addAlert = this.actions$.pipe(
    ofType<actions.AddAlert>(actions.AlertActionsTypes.ADD_ALERT),
    mergeMap((action) => {
      const id = Math.random();
      return merge(
        of(
          new actions.AddAlertSuccess({
            id: id,
            type: action.payload.type,
            message: action.payload.message,
          })
        ),
        of(new actions.RemoveAlert(id)).pipe(delay(6000))
      );
    })
  );
}
