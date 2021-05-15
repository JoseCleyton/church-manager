import { Action } from '@ngrx/store';
import { PageInfoDateFilter } from 'src/app/shared/model/page-info-date-filter.model';
import { Tithing } from 'src/app/shared/model/tithing.model';

export enum TithingActionsTypes {
  GET_TOTAL = '[Tithing] Get Total',
  GET_TOTAL_SUCCESS = '[Tithing] Get Total Success',

  FETCH_LATEST_RECORDS = '[Tithing] Fetch Latest Records',
  FETCH_LATEST_RECORDS_SUCCES = '[Tithing] Fetch Latest Records Success',

  LIST_TITHINGS = '[Tithing] List Tithings',
  LIST_TITHINGS_SUCCES = '[Tithing] List Tithings Success',

  ADD_TITHING = '[Tithing] Add Tithing',
  ADD_TITHING_SUCCES = '[Tithing] Add Tithing Success',
}

export class FetchLatestRecords implements Action {
  readonly type = TithingActionsTypes.FETCH_LATEST_RECORDS;
  constructor() {}
}
export class FetchLatestRecordsSuccess implements Action {
  readonly type = TithingActionsTypes.FETCH_LATEST_RECORDS_SUCCES;
  constructor(public payload: any) {}
}
export class ListTithings implements Action {
  readonly type = TithingActionsTypes.LIST_TITHINGS;
  constructor(public idChurch: number, public startDate: string, public endDate: string) {}
}
export class ListTithingsSuccess implements Action {
  readonly type = TithingActionsTypes.LIST_TITHINGS_SUCCES;
  constructor(public pageInfo: PageInfoDateFilter, public payload: any) {}
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
  | FetchLatestRecords
  | FetchLatestRecordsSuccess
  | ListTithings
  | ListTithingsSuccess
  | AddTithing
  | AddTithingSuccess
  | GetTotal
  | GetTotalSucces;
