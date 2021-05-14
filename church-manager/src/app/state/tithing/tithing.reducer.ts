import { Tithing } from 'src/app/shared/model/tithing.model';
import { TithingActionsTypes, TithingActions } from './tithing.actions';

export interface TithingState {
  total: number;
  tithings: Tithing[];
}

export const initialState: TithingState = {
  total: 0,
  tithings: [],
};

export function tithingReducer(
  state = initialState,
  action: TithingActions
): TithingState {
  switch (action.type) {
    case TithingActionsTypes.ADD_TITHING_SUCCES: {
      return {
        ...state,
        tithings: [...state.tithings, action.tithing],
      };
    }
    case TithingActionsTypes.GET_TOTAL_SUCCESS: {
      return {
        ...state,
        total: action.payload,
      };
    }
    case TithingActionsTypes.LIST_TITHINGS_SUCCES: {
      return {
        ...state,
        tithings: action.payload,
      };
    }
    default:
      return state;
  }
}
