import { AnyAction } from 'redux';

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

const loginAction = ({ email, password }: { email?: string, password?: string }) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});

interface LoginAction extends AnyAction {
  type: typeof LOGIN;
  payload: {
    email: string;
    password: string;
  };
}

const loginSuccessAction = (username: string) => ({
  type: LOGIN_SUCCESS,
  payload: {
    username,
  },
});

interface LoginSuccessAction extends AnyAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    username: string;
  };
}

const loginFailureAction = () => ({
  type: LOGIN_FAILURE,
});

interface LogiFailureAction extends AnyAction {
  type: typeof LOGIN_FAILURE;
  payload: {
    username: string;
  };
}

export type UserActionTypes = LoginAction | LoginSuccessAction | LogiFailureAction;

export default {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  loginAction,
  loginSuccessAction,
  loginFailureAction,
};
