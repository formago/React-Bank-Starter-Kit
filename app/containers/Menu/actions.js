import {
  REQUEST,
  SENDING_REQUEST,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
} from './constants';

export function getMenuItems() {
  return { type: REQUEST };
}

export function sendingRequest(sending) {
  return { type: SENDING_REQUEST, sending };
}

export function requestSuccess(data) {
  return { type: REQUEST_SUCCESS, data };
}

export function requestError(error) {
  return { type: REQUEST_ERROR, error };
}
