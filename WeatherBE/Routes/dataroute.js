const currentweather = require("../Controllers/CurrentWeather");
const weeklyforecast = require("../Controllers/Forecast");
const location = require("../Controllers/Location");
const express = require("express");
const datarouter = express.Router();
datarouter.get("/location", location);
datarouter.get("/currentweather", currentweather);
datarouter.get("/weeklyforecast", weeklyforecast);
module.exports = datarouter;
