/* eslint-disable */
const keys = require('config/endpoints');
import parameters from './parameters';


let localStorage;
if (global.process && process.env.NODE_ENV === "test") {
  localStorage = require("localStorage");
} else {
  localStorage = global.window.localStorage;
}

let service = {

  getGrid() {

    let baseURL = keys.baseURL;
    let listURL = keys.clients.list;
    let accessToken = localStorage.token;  

    let url = `${baseURL}${listURL}`;  

    let myHeaders = {
      "Content-type": "application/json",
      "atoken": localStorage.token
    }; 

    return  fetch(url, {
      method: "POST",    
      headers: myHeaders,
      body: null,
      // mode: "no-cors"      
    }).then(function (response) {
      if (response.ok) {
        return response;
      }
      throw Error(response.statusText);
    }).then(function (response) {
      return response.json();
    }).catch(function (error) {
      console.log('Request failed:', error.message);
    });

  },

};

export default service;
