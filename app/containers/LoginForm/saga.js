// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import { browserHistory } from 'react-router';
import { take, call, put, fork, race, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import auth from '../../helpers/authHelper';
import { makeSelectUsername, makeSelectPassword } from './selectors';
import { USER_AUTHORIZED } from './../App/constants';
// import { userAuthorized } from './../App/actions';

import {
  SENDING_REQUEST,
  // LOGIN_REQUEST,
  // TEST_ENTRY,
  REGISTER_REQUEST,
  SET_AUTH,
  // LOGOUT,
  CHANGE_FORM,
  REQUEST_ERROR,
} from './constants';

import { LOGOUT } from '../../actions/constants';

/**
 * Effect to handle authorization
 * @param  {string} username               The username of the user
 * @param  {string} password               The password of the user
 * @param  {object} options                Options
 * @param  {boolean} options.isRegistering Is this a register request?
 */
export function* authorize({ username, password, isRegistering }) {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  // We then try to register or log in the user, depending on the request
  try {
    let response;
    let hash;

    if (isRegistering) {
      response = yield call(auth.register, username, hash);
    } else {
      response = yield call(auth.login, username, password);
    }
    yield put({
      type: USER_AUTHORIZED,
      info: { ...response },
    });
    return response;
  } catch (error) {
    // console.log('error');
    yield put({ type: REQUEST_ERROR, error: error.message });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}

/**
 * Log in saga
 */
export function* loginFlow() {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
  while (true) {
    // And we're listening for `LOGIN_REQUEST` actions and destructuring its payload
    const request = yield take(['LOGIN_REQUEST', 'TEST_ENTRY']);

    let username;
    let password;
    switch (request.type) {
      case 'LOGIN_REQUEST':
        username = yield select(makeSelectUsername());
        password = yield select(makeSelectPassword());
        break;
      case 'TEST_ENTRY':
        username = 'user1';
        password = '123123';
        break;
      default:
        username = '';
        password = '';
        break;
    }

    // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first
    const winner = yield race({
      auth: call(authorize, { username, password, isRegistering: false }),
      logout: take(LOGOUT),
    });

    // If `authorize` was the winner...
    if (winner.auth) {
      // yield put(userAuthorized(username, password));
      yield put({
        type: CHANGE_FORM,
        newFormState: { username: '', password: '' },
      });
      // ...we send Redux appropiate actions
      yield put({ type: SET_AUTH, newAuthState: true }); // User is logged in (authorized)

      yield put(push('/Cabinet'));
    }
  }
}

/**
 * Register saga
 * Very similar to log in saga!
 */
export function* registerFlow() {
  while (true) {
    // We always listen to `REGISTER_REQUEST` actions
    const request = yield take(REGISTER_REQUEST);
    const { username, password } = request.data;

    // We call the `authorize` task with the data, telling it that we are registering a user
    // This returns `true` if the registering was successful, `false` if not
    const wasSuccessful = yield call(authorize, {
      username,
      password,
      isRegistering: true,
    });

    // If we could register a user, we send the appropiate actions
    if (wasSuccessful) {
      yield put({ type: SET_AUTH, newAuthState: true }); // User is logged in (authorized) after being registered
      yield put({
        type: CHANGE_FORM,
        newFormState: { username: '', password: '' },
      }); // Clear form
      forwardTo('/Cabinet'); // Go to dashboard page
    }
  }
}

// The root saga is what we actually send to Redux's middleware. In here we fork
// each saga so that they are all "active" and listening.
// Sagas are fired once at the start of an app and can be thought of as processes running
// in the background, watching actions dispatched to the store.
export default function* root() {
  yield fork(loginFlow);
  yield fork(registerFlow);
}

// Little helper function to abstract going to different pages
function forwardTo(location) {
  browserHistory.push(location);
}
