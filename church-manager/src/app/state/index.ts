import { ActionReducerMap } from "@ngrx/store";
import * as login from './login'
import * as alert from './alert'
export interface AppState {
    login: login.reducer.LoginState,
    alert: alert.reducer.AlertState
  }
  
  export const reducers: ActionReducerMap<AppState> = {
      login: login.reducer.loginReducer,
      alert: alert.reducer.alertReducer
  };
  
  export const effects: Array<any> = [
      login.effects,
      alert.effects
  ];
  
  export const initialState = {
   login: login.reducer.initialState,
   alert: alert.reducer.initialState
  };