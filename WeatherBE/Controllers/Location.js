const express = require('express');
const axios = require('axios');

const location = (req,res) => {

  const { lat, long } = req.query;
  axios
    .get(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=${process.env.GEOAPIFY}`
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
}

module.exports = location;