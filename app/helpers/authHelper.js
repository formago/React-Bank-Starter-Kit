import localStorage from "utils/localstorage";
import service from "../services/authService";

const authHelper = {
  /**
   * Logs a user in, returning a promise with `true` when done
   * @param  {string} username The username of the user
   * @param  {string} password The password of the user
   */
  login(username, password) {
    // debugger
    // if (auth.loggedIn()) return Promise.resolve(true);
    // Post a fake request
    return service
      .login({ username, password })
      .then(response => {
        // Save token to local storage
        localStorage.token = response.token;
        // localStorage.lifeTimeToken = response.lifeTimeArmAccessToken;
        localStorage.refreshToken = response.refreshToken;
        localStorage.user = JSON.stringify(response);
        return response;
      })
      .catch(error => {
        console.log(error.message);
      });
  },

  refreshAccessToken() {
    return service.refresh().then(response => {
      // Save token to local storage
      localStorage.token = response.accessToken;
      localStorage.refreshToken = response.refreshToken;
      // localStorage.lifeTimeToken = response.lifeTimeArmAccessToken;
      return response;
    });
  },
  /**
   * Logs the current user out
   */
  logout() {
    return service.logout();
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
        .register({ username, password })
        // Log user in after registering
        .then(() => this.login(username, password))
    );
  },
  onChange() {}
};

export default authHelper;
