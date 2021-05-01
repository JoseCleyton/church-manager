import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, delay, tap } from 'rxjs/operators';
import { LoginService } from 'src/app/shared/service/login/login.service';
import * as actions from './alert.actions';

@Injectable()
export class AlertEffects {
  constructor(private actions$: Actions) {}

}