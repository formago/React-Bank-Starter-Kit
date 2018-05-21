import { requestAuth } from 'utils/request';
import localStorageTest from 'localStorage';
let localStorage;

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = localStorageTest;
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage;
}

const service = {
  getMenu() {
    const url = 'http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080/rsAppsArm/auth/usermenu';
    return requestAuth(url, {
      method: 'GET',
    });
  },

  setMenuId(menuId) {
    localStorage.menuId = menuId;
    return true;
  },
};

export default service;
