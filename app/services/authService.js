// const keys = require('config/endpoints');
import { request, requestAuth } from 'utils/request';

const service = {

  login(data) {
    const url = 'http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080/rsAppsArm/auth/login/';
    const requestData = {
      login: data.username,
      password: data.password,
    };
    return request(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(requestData),
    });
  },

  // may be wrong, need check
  register(data) {
    const url = 'http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080/rsAppsArm/auth/register/';
    const requestData = {
      login: data.username,
      password: data.password,
    };
    return request(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(requestData),
    });
  },

  // may be wrong, need check
  logout() {
    const url = 'http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080/rsAppsArm/auth/logout/';
    return requestAuth(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        refresh_atoken: localStorage.refreshToken, // API wait this, but imho we need atoken
        // atoken: localStorage.token,
      },
    });
  },

  refresh() {
    const url = 'http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080/rsAppsArm/auth/refresh/';
    const refreshToken = localStorage.refreshToken;
    return request(url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        refresh_atoken: refreshToken,
      }),
    });
  },
};

export default service;
