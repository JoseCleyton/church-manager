import { Action } from '@ngrx/store';
import { Tithing } from 'src/app/shared/model/tithing.model';

export enum TithingActionsTypes {
  GET_TOTAL = '[Tithing] Get Total',
  GET_TOTAL_SUCCESS = '[Tithing] Get Total Success',

  LIST_TITHINGS = '[Tithing] List Tithings',
  LIST_TITHINGS_SUCCES = '[Tithing] List Tithings Success',

  ADD_TITHING = '[Tithing] Add Tithing',
  ADD_TITHING_SUCCES = '[Tithing] Add Tithing Success',
}

export class ListTithings implements Action {
  readonly type = TithingActionsTypes.LIST_TITHINGS;
  constructor(public dateStart: string, public dateEnd: string) {}
}
export class ListTithingsSuccess implements Action {
  readonly type = TithingActionsTypes.LIST_TITHINGS_SUCCES;
  constructor(public payload: any) {}
}

export class AddTithing implements Action {
  readonly type = TithingActionsTypes.ADD_TITHING;
  constructor(public tithing: Tithing) {}
}
export class AddTithingSuccess implements Action {
  readonly type = TithingActionsTypes.ADD_TITHING_SUCCES;
  constructor(public tithing: Tithing) {}
}
export class GetTotal implements Action {
  readonly type = TithingActionsTypes.GET_TOTAL;
  constructor() {}
}
export class GetTotalSucces implements Action {
  readonly type = TithingActionsTypes.GET_TOTAL_SUCCESS;
  constructor(public payload: any) {}
}
export type TithingActions =
  | ListTithings
  | ListTithingsSuccess
  | AddTithing
  | AddTithingSuccess
  | GetTotal
  | GetTotalSucces;
