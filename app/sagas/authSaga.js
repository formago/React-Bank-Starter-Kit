
import { take, put, fork } from 'redux-saga/effects';
import localStorage from 'utils/localstorage';
import { push } from 'react-router-redux';

import {
    LOGOUT,
} from '../actions/constants';
// import authHelper from '../helpers/authHelper';

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

// export function* refreshAccessToken() {
//   while (true) {
//     yield take(REFRESH_ACCESS_TOKEN);
//     console.log('refreshAccessToken');
//     // this we need call once on launch
//     refreshStop = setInterval(() => {
//       authHelper.refreshAccessToken();
//     }, 10000);
//   }
// }


export default function* root() {
  yield fork(logoutFlow);
}
