const bcrypt = require("bcrypt");
const saltRounds = 10;
const Usermodel = require("../Models/Usermodel");
var jwt = require("jsonwebtoken");
const signupController = async (req, res) => {
  try {
    const { usertype, username, email, password } = req.body;
    const user = await Usermodel.findOne({ username });
    console.log(user);

    if (user) {
      return res.status(409).json({
        message: "User already exists, proceed to login",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newuser = new Usermodel({
      usertype,
      username,
      email,
      password: hashedPassword,
    });

    await newuser.save();

    res.status(201).json({
      message: "Signup Successful",
      success: true,
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error", success: false });
  }
};

const loginController = async (req, res) => {
  const { username, password } = req.body;
  const user = await Usermodel.findOne({ username: username });
  if (!user) {
    return res.status(409).json({ message: "User doesnot exists" });
  }
  if (!password || !user.password) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    res.status(200).json({ message: "login successfull" });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
};
module.exports = { signupController, loginController };
