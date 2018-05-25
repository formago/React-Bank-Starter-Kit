// module.exports = {
//   baseURL: "http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080",
//   login: {
//     login: "/rsAppsArm/auth/login/",
//     refresh: "/rsAppsArm/auth/refresh/"
//   },
//   clients: {
//     list: "/rsAppsArm/client/list"
//   }
// };

const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI,
    baseURL: "https://limitless-caverns-64097.herokuapp.com",
    auth: {
      login: "/rsAppsArm/auth/login/",
      refresh: "/rsAppsArm/auth/refresh/"
    },
    clients: {
      list: "/rsAppsArm/client/list"
    }
  },
  default: {
    SECRET: "SUPERSECRETPASSWORD123",
    DATABASE:
      "mongodb://formago:9689086q@ds129780.mlab.com:29780/formago-ebank",
    baseURL: "http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080",
    auth: {
      login: "/rsAppsArm/auth/login/",
      refresh: "/rsAppsArm/auth/refresh/"
    },
    clients: {
      list: "/rsAppsArm/client/list"
    }
  },
  development: {
    SECRET: "SUPERSECRETPASSWORD123",
    DATABASE:
      "mongodb://formago:9689086q@ds129780.mlab.com:29780/formago-ebank",
    baseURL: "http://localhost:3001",
    auth: {
      login: "/api/auth/login/",
      refresh: "/rsAppsArm/auth/refresh/"
    },
    clients: {
      list: "/rsAppsArm/client/list"
    },
    menu:{
      list: "/api/menu"
    }
  }
};

exports.get = function get(env) {
  return config[env] || config.default;
};
