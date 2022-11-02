// this file gives us a place to store the secret we use when signing jsonwebtoken and a place to write a middleware function

const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET_KEY;
module.exports.authenticate = (req, res, next) => {
  jwt.verify(req.cookies.userToken, SECRET, (err, payload) => {
    if (err) {
      res.status(401).json({ verified: false });
    } else {
      next();
    }
  });
};
