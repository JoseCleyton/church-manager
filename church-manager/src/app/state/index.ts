import { ActionReducerMap } from '@ngrx/store';
import * as login from './login';
import * as alert from './alert';
import * as church from './church';
import * as christian from './christian';
export interface AppState {
  login: login.reducer.LoginState;
  alert: alert.reducer.AlertState;
  church: church.reducer.ChurchState;
  christian: christian.reducer.ChristianState;
}

export const reducers: ActionReducerMap<AppState> = {
  login: login.reducer.loginReducer,
  alert: alert.reducer.alertReducer,
  church: church.reducer.churchReducer,
  christian: christian.reducer.christianReducer,
};

export const effects: Array<any> = [
  login.effects,
  alert.effects,
  church.effects,
  christian.effects,
];

export const initialState = {
  login: login.reducer.initialState,
  alert: alert.reducer.initialState,
  church: church.reducer.initialState,
  christian: christian.reducer.initialState,
};
