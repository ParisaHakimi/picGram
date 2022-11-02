const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET_KEY;
// const payload = { _id: newUser._id, email: newUser.email };

module.exports = {
  registerUser: async (req, res) => {
    try {
      // create a new user
      const newUser = await User.create(req.body);
      // create a JWT using our secret key
      const userToken = jwt.sign(
        {
          _id: newUser._id,
          email: newUser.email,
        },
        SECRET
      );
      // return a response(JWT) to the user as a cookie
      res
        .status(201)
        .cookie("userToken", userToken, {
          httpOnly: true,
          expires: new Date(Date.now() + 90000),
        })
        .json({
          successMessage: "congratulation you logged in",
          user: newUser,
        });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  // remember to uncomment the middleware for confirmPassword on user.model file
  loginUser: async (req, res) => {
    // find a user who is already exist in our database based on their email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json({ error: "invalid email/password" });
    }
    try {
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
      );
      console.log(isPasswordValid);
      if (!isPasswordValid) {
        res.status(400).json({ error: "invalid email/password" });
      } else {
        const userToken = jwt.sign(
          // it doesn't have to be all the information, it can be some data that's part of the payload
          { _id: user._id, email: user.email },
          SECRET
        );
        res
          .status(201)
          .cookie("userToken", userToken, {
            httpOnly: true,
            expires: new Date(Date.now() + 90000),
          })
          .json({
            successMessage: "User logged in",
            user: user,
          });
      }
    } catch (error) {
      res.status(400).json(error);
    }
  },
  logoutUser: (req, res) => {
    res.clearCookie("userToken");
    res.json({ success: "Logged out" });
  },
};
