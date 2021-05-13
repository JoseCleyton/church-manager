import { Action } from '@ngrx/store';
import { Christian } from 'src/app/shared/model/christian.model';

export enum ChristianActionsTypes {
  LIST_CHRISTIANS = '[Christian] List Christians',
  LIST_CHRISTIAN_SUCCES = '[Christian] List Christians Success',

  ADD_CHRISTIAN = '[Christian] Add Christian',
  ADD_CHRISTIAN_SUCCES = '[Christian] Add Christian Success',

  SELECT_CHRISTIAN = '[Christian] Select Christian',

  DELET_CHRISTIAN = '[Christian] Delete Christian',
  DELETE_CHRISTIAN_SUCCES = '[Christian] Delete Christian Success',

  EDIT_CHRISTIAN = '[Christian] Edit Christian',
  EDIT_CHRISTIAN_SUCCES = '[Christian] Edit Christian Success',
}

export class ListChristians implements Action {
  readonly type = ChristianActionsTypes.LIST_CHRISTIANS;
  constructor() {}
}
export class ListChristiansSuccess implements Action {
  readonly type = ChristianActionsTypes.LIST_CHRISTIAN_SUCCES;
  constructor(public payload: any) {}
}

export class AddChristian implements Action {
  readonly type = ChristianActionsTypes.ADD_CHRISTIAN;
  constructor(public christian: Christian) {}
}
export class AddChurchSuccess implements Action {
  readonly type = ChristianActionsTypes.ADD_CHRISTIAN_SUCCES;
  constructor(public payload: Christian) {}
}
export class SelectChristian implements Action {
  readonly type = ChristianActionsTypes.SELECT_CHRISTIAN;
  constructor(public christian: Christian) {}
}
export class DeleteChristian implements Action {
  readonly type = ChristianActionsTypes.DELET_CHRISTIAN;
  constructor(public id: number) {}
}
export class DeleteChristianSucces implements Action {
  readonly type = ChristianActionsTypes.DELETE_CHRISTIAN_SUCCES;
  constructor(public id: number) {}
}
export class EditChristian implements Action {
  readonly type = ChristianActionsTypes.EDIT_CHRISTIAN;
  constructor(public christian: Christian) {}
}
export class EditChristianSucces implements Action {
  readonly type = ChristianActionsTypes.EDIT_CHRISTIAN_SUCCES;
  constructor(public payload: Christian) {}
}
export type ChristianActions =
  | ListChristians
  | ListChristiansSuccess
  | AddChristian
  | AddChurchSuccess
  | SelectChristian
  | DeleteChristian
  | DeleteChristianSucces
  | EditChristian
  | EditChristianSucces;
