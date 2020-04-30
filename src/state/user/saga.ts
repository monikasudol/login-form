import { call, takeEvery, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import loginService from '../../common/services/loginService';
import helpers from '../../common/helpers/helpers';
import { endpoints, usernames } from '../../common/mockedData/mockedData';

import actions from './actions';

function* onLogin(action: AnyAction) {
  const { payload } = action;
  try {
    // draw endpoint, one returns success, second returns error
    const endpoint = helpers.getRandomElement(endpoints);
    const response = yield call(loginService.userLogin, endpoint, payload);
    if (response && response.token) {
      // here token can be saved to localStorage
    }
    const username = helpers.getRandomElement(usernames);
    yield put(actions.loginSuccessAction(username));
  } catch (error) {
    yield put(actions.loginFailureAction());
  }
}

export default function* userSaga() {
  yield takeEvery(actions.LOGIN, onLogin);
}
