/* eslint-disable */
import { take, call, put, fork } from 'redux-saga/effects';
import service from './service';

// import timestamp from 'unix-timestamp/timestamp';

// require('time-stamp');

import {
  REQUEST,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
} from './constants';



export function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = a.getFullYear();  
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
}

export function* gridFlow() {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
  while (true) {
    yield take(REQUEST);
    try {
      const response = yield call(service.getGrid);


      response.list.forEach(function (elem, ind) {
        elem.dateOpen = timeConverter(elem.dateOpen);
        elem.dateClose = timeConverter(elem.dateClose);
      });


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
  yield fork(gridFlow);
}
