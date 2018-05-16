/*
 * Actions describe changes of state in your application
 */

// We import constants to name our actions' type
import { LOGOUT, REFRESH_ACCESS_TOKEN } from './constants';

export function logout() {
  return { type: LOGOUT };
}

export function refreshAccessToken() {
  return { type: REFRESH_ACCESS_TOKEN };
}
