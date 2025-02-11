const currentweather = require('../Controllers/CurrentWeather');
const location = require('../Controllers/Location')
const express = require('express');
const router = express.Router();
router.get('/location',location);
router.get('/currentweather',currentweather);
module.exports = router;