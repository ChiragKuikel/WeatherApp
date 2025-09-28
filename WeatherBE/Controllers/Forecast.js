const axios = require("axios");
require("dotenv").config();
const weeklyforecast = (req, res) => {
  const { lat, long} = req.query;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.OPENWEATHER}&units=metric`
    )
    .then(function (response) {
      console.log("success");
      const data = response.data;
      const tommorrow = processing(data.list.slice(8, 16));
      const dayafter = processing(data.list.slice(16, 24));
      const dayafter2 = processing(data.list.slice(24, 32));
      const dayafter3 = processing(data.list.slice(32, 40));
      const weekly = {
        "tommorrow" :tommorrow,
        "dayafter" : dayafter,
        "dayafter2" : dayafter2,
        "dayafter3" : dayafter3,
      }
      res.send( weekly);
    })
    .catch(function (error) {
      console.log("failed");
      res.send(error.message);
      console.log(error);
    });
};

const processing = (data) => {
  const DescriptionCollection = [];
  const TempCollection = [];
  const count = {};
  let mostFrequent = null;
  let maxCount = 0;
  data.forEach((item, index) => {
    DescriptionCollection[index] = item.weather[0].description;
    TempCollection[index] = item.main.temp;
  });
  for (const item of DescriptionCollection) {
    count[item] = (count[item] || 0) + 1;
    if (count[item] > maxCount) {
      maxCount = count[item];
      mostFrequent = item;
    }
  }
  const initialValue = 0;
  const weatherSum = TempCollection.reduce((accumulator,currentValue) => {
      return accumulator = accumulator + currentValue;
  },initialValue)
  return({
    "averageWeather" : mostFrequent,
    "averageTemperature" : Math.round(weatherSum/ TempCollection.length),
  })
};

module.exports = weeklyforecast;
