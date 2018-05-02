
let localStorage;

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === "test") {
    localStorage = require("localStorage");
} else {
    // If not, use the browser one
    localStorage = global.window.localStorage;
}

const authorizeHelper = {
    isAuthorized() {
        if (localStorage.token) {
            return true;
        }
        return false;
    }
};

export default authorizeHelper;