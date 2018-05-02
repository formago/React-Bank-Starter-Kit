/*
 * The reducer takes care of state changes in our app through actions
 */

import {
  CHANGE_FORM,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  SET_AUTH,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR,
  TEST_ENTRY,
  LOGOUT
} from "./constants";

import auth from "./auth";

// The initial application state
let initialState = {
  formState: {
    username: "",
    password: ""
  },
  error: "",
  currentlySending: false,
  loggedIn: auth.loggedIn()
};

// Takes care of changing the application state
function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return { ...state, formState: action.newFormState };
    case CHANGE_USERNAME:
      var newFormState = {
        ...state.formState,
        username: action.newUserName
      };
      return { ...state, formState: newFormState };
    case CHANGE_PASSWORD:
      var newFormState = {
        ...state.formState,
        password: action.newPassword
      };
      return { ...state, formState: newFormState };
    case SET_AUTH:
      return { ...state, loggedIn: action.newAuthState };
    case SENDING_REQUEST:
      return { ...state, currentlySending: action.sending };
    case REQUEST_ERROR:
      return { ...state, error: action.error };
    case TEST_ENTRY:
      return { ...state, number: action.number };
    case CLEAR_ERROR:
      return { ...state, error: "" };
    case LOGOUT:
      return { ...state, error: "" };
    default:
      return state;
  }
}

export default reducer;
