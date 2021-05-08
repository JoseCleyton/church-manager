import { Church } from 'src/app/shared/model/church.model';
import { ChurchActions, ChurchActionsTypes } from './church.actions';

export interface ChurchState {
  quantity: number;
  churchs: Church[];
  selectedChurch: Church;
}

export const initialState: ChurchState = {
  quantity: 0,
  churchs: [],
  selectedChurch: undefined,
};

export function churchReducer(
  state = initialState,
  action: ChurchActions
): ChurchState {
  switch (action.type) {
    case ChurchActionsTypes.GET_QUANTITY_SUCCESS: {
      return {
        ...state,
        quantity: action.payload,
      };
    }
    case ChurchActionsTypes.LIST_CHURCHS_SUCCES: {
      return {
        ...state,
        churchs: action.payload,
      };
    }
    case ChurchActionsTypes.ADD_CHURCH_SUCCES: {
      return {
        ...state,
        churchs: [...state.churchs, action.payload],
      };
    }
    case ChurchActionsTypes.SELECT_CHURCH: {
      return {
        ...state,
        selectedChurch: action.church,
      };
    }
    case ChurchActionsTypes.DELETE_CHURCH_SUCCES: {
      return {
        ...state,
        churchs: state.churchs.filter((church) => church.id !== action.id),
      };
    }
    case ChurchActionsTypes.EDIT_CHURCH_SUCCES: {
      return {
        ...state,
        churchs: state.churchs.filter((church) => {
          if (church.id === action.payload.id) {
            church = action.payload;
          }
        }),
      };
    }
    default:
      return state;
  }
}
