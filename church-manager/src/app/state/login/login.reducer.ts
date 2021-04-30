import { LoginActions, LoginActionsTypes } from './login.actions';

export interface LoginState {
  token: string;
  isAdmin: boolean;
}

export const initialState: LoginState = {
  token: undefined,
  isAdmin: undefined,
};

export function loginReducer(
  state = initialState,
  action: LoginActions
): LoginState {
  switch (action.type) {
    case LoginActionsTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        isAdmin: action.payload.isAdmin,
      };
    }

    default:
      return state;
  }
}
