import { Christian } from 'src/app/shared/model/christian.model';
import { ChristianActions, ChristianActionsTypes } from './christian.actions';

export interface ChristianState {
  christians: Christian[];
  selectedChristian: Christian;
}

export const initialState: ChristianState = {
  christians: [],
  selectedChristian: undefined,
};

export function christianReducer(
  state = initialState,
  action: ChristianActions
): ChristianState {
  switch (action.type) {
    case ChristianActionsTypes.LIST_CHRISTIAN_SUCCES: {
      return {
        ...state,
        christians: action.payload,
      };
    }
    case ChristianActionsTypes.ADD_CHRISTIAN_SUCCES: {
      return {
        ...state,
        christians: [...state.christians, action.payload],
      };
    }
    case ChristianActionsTypes.SELECT_CHRISTIAN: {
      return {
        ...state,
        selectedChristian: action.christian,
      };
    }
    case ChristianActionsTypes.DELETE_CHRISTIAN_SUCCES: {
      return {
        ...state,
        christians: state.christians.filter(
          (christian) => christian.id !== action.id
        ),
      };
    }
    case ChristianActionsTypes.EDIT_CHRISTIAN_SUCCES: {
      const christiansAux = state.christians.filter(
        (christian) => christian.id !== action.payload.id
      );

      return {
        ...state,
        christians: [...christiansAux, action.payload],
      };
    }
    default:
      return state;
  }
}
