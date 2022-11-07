const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET_KEY;
// const payload = { _id: newUser._id, email: newUser.email };

module.exports = {
  showAllUser: (req, res) => {
    User.find()
      .populate("image")
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  showOneUser: (req, res) => {
    User.findOne({ _id: req.params.id })
      .populate("image")
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  editExistingUser: (req, res) => {
    User.updateOne({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  deleteExistingUser: (req, res) => {
    User.deleteOne({ _id: req.params.id })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

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
  getLoggedUser: (req, res) => {
    const decodedJWT = jwt.decode(req.cookies.userToken, { complete: true });
    User.findById(decodedJWT.payload._id)
      // populate will allow it to find the object id refs and automatically run the queries for that effectively- populate enable you to inject the document into your parent
      // .populate("firstName")
      // .populate("lastName")
      // .populate("email")
      // .populate("profilePic")
      .populate("image")
      .then((result) => res.json(result))
      .catch((err) => res.status(400).json(err));
  },
  logoutUser: (req, res) => {
    res.clearCookie("userToken");
    res.json({ success: "Logged out" });
  },
};
