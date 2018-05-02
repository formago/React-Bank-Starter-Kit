import request from "utils/request";
let localStorage;

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === "test") {
  localStorage = require("localStorage");
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage;
}

const service = {
  getMenu() {
    var token = localStorage.token;
    var url =
      "http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080/rsAppsArm/auth/usermenu?atoken=" +
      token;

    const data = [];

    let userInfo;
    return fetch(url, {
      method: "GET",
      headers: new Headers({
        'Content-Type': 'application/json',
        "atoken": localStorage.token
      }),
    }).then(response => {      
      if(!response.ok)
      throw new Error("my custom error");
      return response.json();
    }).catch(error => {      
      console.log(error);
      throw Error(error.message);
    });
  },
  setMenuId(menuId) {
    localStorage.menuId = menuId;
    return true;
  }
};

export default service;
