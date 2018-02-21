import { take, call, put, fork } from 'redux-saga/effects';
import service from './service';

import {
  REQUEST,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
} from './constants';

export function* loginFlow() {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
  while (true) {
    yield take(REQUEST);

    try {
      const response = yield call(service.getMenu);
      yield put({ type: REQUEST_SUCCESS, response });
    } catch (error) {
      yield put({ type: REQUEST_ERROR, error: error.message });
    }
  }
}

// The root saga is what we actually send to Redux's middleware. In here we fork
// each saga so that they are all "active" and listening.
// Sagas are fired once at the start of an app and can be thought of as processes running
// in the background, watching actions dispatched to the store.
export default function* root() {
  yield fork(loginFlow);
}
