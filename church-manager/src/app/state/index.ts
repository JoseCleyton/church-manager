import { ActionReducerMap } from '@ngrx/store';
import * as login from './login';
import * as alert from './alert';
import * as church from './church';
export interface AppState {
  login: login.reducer.LoginState;
  alert: alert.reducer.AlertState;
  church: church.reducer.ChurchState;
}

export const reducers: ActionReducerMap<AppState> = {
  login: login.reducer.loginReducer,
  alert: alert.reducer.alertReducer,
  church: church.reducer.churchReducer,
};

export const effects: Array<any> = [
  login.effects,
  alert.effects,
  church.effects,
];

export const initialState = {
  login: login.reducer.initialState,
  alert: alert.reducer.initialState,
  church: church.reducer.initialState,
};
