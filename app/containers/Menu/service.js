import localStorageTest from "localStorage";
let localStorage;
import { request, requestAuth } from "utils/request";
const config = require("config/endpoints").get(process.env.NODE_ENV);

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === "test") {
  localStorage = localStorageTest;
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage;
}

const service = {
  getMenu(data) {
    let baseURL = config.baseURL;
    let listURL = config.menu.list;
    let url = `${baseURL}${listURL}`;
    return requestAuth(url, {
      method: "GET",
      headers: {
        "content-type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    });
  },
  setMenuId(menuId) {
    localStorage.menuId = menuId;
    return true;
  }
};

export default service;
