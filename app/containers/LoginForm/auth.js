import service from "./service";

let localStorage;

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === "test") {
  localStorage = require("localStorage");
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage;
}

const auth = {
  /**
   * Logs a user in, returning a promise with `true` when done
   * @param  {string} username The username of the user
   * @param  {string} password The password of the user
   */
  login(username, password) {
    // if (auth.loggedIn()) return Promise.resolve(true);
    // Post a fake request
    return service.post("/login", { username, password }).then(response => {
      // Save token to local storage
      localStorage.token = response.armAccessToken;
      localStorage.refreshToken = response.armRefreshToken;
      localStorage.user = JSON.stringify(response);
      return response;
    }).catch(function (error) {      
      console.log(error.message)
    });
  },

  refreshAccessToken() {
    return service.post("/refresh").then(response => {
      // Save token to local storage
      localStorage.token = response.accessToken;
      return response;
    });
  },
  /**
   * Logs the current user out
   */
  logout() {
    return service.post("/logout");
  },
  /**
   * Checks if a user is logged in
   */
  loggedIn() {
    return !!localStorage.token;
  },
  /**
   * Registers a user and then logs them in
   * @param  {string} username The username of the user
   * @param  {string} password The password of the user
   */
  register(username, password) {
    // Post a fake request
    return (
      service
        .post("/register", { username, password })
        // Log user in after registering
        .then(() => auth.login(username, password))
    );
  },
  onChange() { }
};

export default auth;
