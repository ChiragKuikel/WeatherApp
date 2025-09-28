const express = require("express");
const {loginValdiation,signupValidation} = require("../Middlewares/authValidation");
const { loginController, signupController } = require("../Controllers/authController");
const authrouter = express.Router();
authrouter.post('/login',loginValdiation,loginController);
authrouter.post('/signup',signupValidation,signupController);

module.exports = authrouter;