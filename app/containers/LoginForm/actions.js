/*
 * Actions describe changes of state in your application
 */

// We import constants to name our actions' type
import {
  CHANGE_FORM,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  SET_AUTH,
  SENDING_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  // LOGOUT,
  REQUEST_ERROR,
  CLEAR_ERROR,
  TEST_ENTRY,
} from './constants';

/**
 * Sets the form state
 * @param  {object} newFormState          The new state of the form
 * @param  {string} newFormState.username The new text of the username input field of the form
 * @param  {string} newFormState.password The new text of the password input field of the form
 */
export function changeForm(newFormState) {
  return { type: CHANGE_FORM, newFormState };
}

export function changeUserName(newUserName) {
  return { type: CHANGE_USERNAME, newUserName };
}

export function changePassword(newPassword) {
  return { type: CHANGE_PASSWORD, newPassword };
}


/**
 * Sets the authentication state of the application
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
export function setAuthState(newAuthState) {
  return { type: SET_AUTH, newAuthState };
}

/**
 * Sets the `currentlySending` state, which displays a loading indicator during requests
 * @param  {boolean} sending True means we're sending a request, false means we're not
 */
export function sendingRequest(sending) {
  return { type: SENDING_REQUEST, sending };
}

/**
 * Tells the app we want to log in a user
 * @param  {object} data          The data we're sending for log in
 * @param  {string} data.username The username of the user to log in
 * @param  {string} data.password The password of the user to log in
 */
export function loginRequest() {
  return { type: LOGIN_REQUEST };
}

export function testEntry(number) {
  return { type: TEST_ENTRY, number };
}

/**
 * Tells the app we want to log out a user
 */
// export function logout() {
//   return { type: LOGOUT };
// }

/**
 * Tells the app we want to register a user
 * @param  {object} data          The data we're sending for registration
 * @param  {string} data.username The username of the user to register
 * @param  {string} data.password The password of the user to register
 */
export function registerRequest(data) {
  return { type: REGISTER_REQUEST, data };
}

/**
 * Sets the `error` state to the error received
 * @param  {object} error The error we got when trying to make the request
 */
export function requestError(error) {
  return { type: REQUEST_ERROR, error };
}

/**
 * Sets the `error` state as empty
 */
export function clearError() {
  return { type: CLEAR_ERROR };
}
