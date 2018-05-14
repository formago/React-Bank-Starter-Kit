
import { take, put, fork } from 'redux-saga/effects';
import localStorage from 'utils/localstorage';
import { push } from 'react-router-redux';

import {
    TEST_ENTRY,
    LOGOUT,
} from '../containers/LoginForm/constants';
// import { loginFlow } from '../containers/LoginForm/saga.js';
import authHelper from '../helpers/authHelper';

let refreshStop;

export function* logoutFlow() {
  while (true) {
    yield take(LOGOUT);
    clearInterval(refreshStop);
    localStorage.clear();
    console.log('logout');
    // yield put({ type: SET_AUTH, newAuthState: false });
    yield put(push('/'));
  }
}

export function* loginFlow1() {
  while (true) {
    yield take(TEST_ENTRY);
    console.log('testEntry');
    refreshStop = setInterval(() => {
      authHelper.refreshAccessToken();
    }, 10000);
  }
}


export default function* root() {
  yield fork(logoutFlow);
  yield fork(loginFlow1);
}
