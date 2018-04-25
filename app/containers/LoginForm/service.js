const keys = require('config/endpoints');

const service = {
  /**
   * Pretends to post to a remote server
   * @param  {string}  endpoint The endpoint of the server that should be contacted
   * @param  {?object} data     The data that should be transferred to the server
   */
  post(endpoint, data) {
    switch (endpoint) {
      case "/login":
        var url =
          "http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080/rsAppsArm/auth/login/";
        var requestData = {
          login: data.username,
          password: data.password
        };
        let userInfo;
        return fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json;charset=UTF-8"
          },
          body: JSON.stringify(requestData)
        }).then(response => {
          if (response.ok)
            return response.json();
          else return response.json();
        }, error => {
          console.log(error)
        })
          .then(response => {
            if (response.errMessForClient) {
              throw new Error(response.errMessForClient);
            }
            else {
              return response;
            }
          });

      case "/register":
        return server.register(data.username, data.password);
      case "/logout":
        return server.logout();
      case "/refresh":
        var url =
          "http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080/rsAppsArm/auth/refresh/";
        var refreshToken = localStorage.refreshToken;
        return fetch(url, {
          method: "GET",
          headers: new Headers({
            'Content-Type': 'application/json',
            "refresh_atoken": refreshToken
          }),
        }).then(response => {

          return response.json();
        });
      default:
        break;
    }
  }
};

export default service;
