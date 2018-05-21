import {
  REQUEST,
  SENDING_REQUEST,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
  SET_CURRENT_MENU_ITEM,
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

export function setCurrentMenuItem(menuId) {
  return { type: SET_CURRENT_MENU_ITEM, menuId };
}
