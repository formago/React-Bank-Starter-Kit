/* eslint-disable */
// keys.js - figure out what set of credentials to return

if (process.env.NODE_ENV === "production") {

    module.exports = require("./endpoints.prod");

} else {
    
    module.exports = require("./endpoints.dev");
}