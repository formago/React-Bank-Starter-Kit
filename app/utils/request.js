import localStorage from 'utils/localstorage';
import authHelper from '../helpers/authHelper';

/**
 * Parses the JSON returned by a network request
 * @param  {object} response A response from a network request
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 * @param  {object} response   A response from a network request
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  let error;
  if (response.errMessForClient) {
    error = new Error(response.errMessForClient);
  } else {
    error = new Error(response.statusText);
  }
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           The response data
 */
export function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

export function requestAuth(url, options) {
  // const error = new Error('Message for Client');
  // throw error;

  if (false) { // if (localStorage.lifeTimeToken > Date.now()) {
    return authHelper.refreshAccessToken()
    .then(() => doAuthRequest(url, options))
    .catch((err) => {
      throw err;
    });
  }
  return doAuthRequest(url, options);
}

function doAuthRequest(url, options) {
  const authOptions = {
    // method: 'GET',  // think about needing so much specials methods
    headers: new Headers({
      'Content-Type': 'application/json',
      atoken: localStorage.token,
    }),
  };
  const fullOptions = Object.assign(authOptions, options);
  return request(url, fullOptions);
}
