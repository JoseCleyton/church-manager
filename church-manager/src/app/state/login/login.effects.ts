import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, delay, tap } from 'rxjs/operators';
import { LoginService } from '../../shared/service/login.service';
import * as actions from './login.actions';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private loginService: LoginService) {}

  @Effect()
  login = this.actions$.pipe(
    ofType<actions.Login>(actions.LoginActionsTypes.LOGIN),
    switchMap((action) =>
      this.loginService.authenticate(action.payload).pipe(
        map((response) => {
          return new actions.LoginSuccess(response);
        }),
        //catchError((err) => of(new fromAlert.actions.Error(err.error.message)))
      )
    )
  );
}