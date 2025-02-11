const axios = require("axios");
require("dotenv").config();
const currentweather = (req, res) => {
  const { lat, long } = req.query;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.OPENWEATHER}`
    )
    .then(function (response) {
      console.log("success");
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log("failed");
      res.send(error.message);
      console.log(error);
    });
};

module.exports = currentweather;
