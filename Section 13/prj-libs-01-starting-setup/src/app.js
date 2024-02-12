"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var form = document.querySelector('form');
var addressInput = document.getElementById('address');
var GOOGLE_API_KEY = 'AIzaSyCIaAc2c5M3VpbCH6PPq_guwy9lHuowXOs';
function searchAddressHandler(event) {
    event.preventDefault();
    var enterAddress = addressInput.value;
    axios_1.default.get("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(encodeURI(enterAddress), "&key=").concat(GOOGLE_API_KEY)).then(function (response) {
        console.log(response);
    }).catch(function (err) {
        console.log(err);
    });
}
form.addEventListener('submit', searchAddressHandler);
