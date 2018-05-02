
import { browserHistory } from 'react-router'
import { take, call, put, fork, race, takeLatest } from 'redux-saga/effects'
import localStorage from "utils/localstorage.js"
import { push } from "react-router-redux"


import {
    SENDING_REQUEST,
    LOGIN_REQUEST,
    TEST_ENTRY,
    REGISTER_REQUEST,
    SET_AUTH,
    LOGOUT,
    CHANGE_FORM,
    REQUEST_ERROR

} from '../containers/LoginForm/constants'
import { loginFlow } from '../containers/LoginForm/saga.js';
import authFlow from "../services/authFlow.js";

let refreshStop;

export function* logoutFlow() {
    while (true) {
        yield take(LOGOUT)        
        clearInterval(refreshStop);
        localStorage.clear();
        console.log("logout");
        yield put(push("/"));
    }
}

export function* loginFlow1() {
    while (true) {
        yield take(TEST_ENTRY);        
        console.log("testEntry");
        refreshStop = setInterval(function () {
           authFlow.refreshAccessToken();
        }, 10000);

    }
}



export default function* root() {
    yield fork(logoutFlow),
        yield fork(loginFlow1)
}
