import actions from './actions';
import constants from '../../common/contstants/api';
import { AnyAction } from 'redux';

export interface UserState {
  loginRequestStatus?: string;
  username: string;
}

export const initialState: UserState = {
  loginRequestStatus: '',
  username: '',
};

function reducer(state = initialState, action: AnyAction) {
  const { type, payload } = action;
  switch (type) {
    case actions.LOGIN : {
      return {
        ...state,
        loginRequestStatus: constants.REQUEST.STATUS.SENDING,
      };
    }
    case actions.LOGIN_SUCCESS : {
      return {
        ...state,
        username: payload.username,
        loginRequestStatus: constants.REQUEST.STATUS.SUCCESS,
      };
    }
    case actions.LOGIN_FAILURE : {
      return {
        ...state,
        loginRequestStatus: constants.REQUEST.STATUS.FAILURE,
      };
    }
    case actions.RESET_LOGIN_STATUS: {
      return {
        ...state,
        loginRequestStatus: '',
      }
    }
    default:
      return state;
  }
}

export default reducer;
