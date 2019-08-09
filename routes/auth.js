const express = require("express");
const User = require("../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");
const jwt = require("jsonwebtoken"); // to generate signed token
const expressJwt = require("express-jwt");
const router = express.Router();

const { signupValidator } = require("../validator/validate");

const requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth"
});

router.post("/signup", signupValidator, (req, res) => {
  const user = new User(req.body);

  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err)
      });
    }
    user.salt = undefined;
    user.hash_password = undefined;
    res.json({ user });
  });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  // find the user based on email
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ err: "User with that email does not exist! Please Sign up" });
    }

    // if user is found make sure that email and password is match
    // create authenticate method in user model
    if (!user.authenticate(password)) {
      return res
        .status(400)
        .json({ error: "Email and password do not match!" });
    }
    // generate a signed token with user id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    // persist the token as 't' in cookie with expiry date
    res.cookie("t", token, { expire: new Date() + 9999 });

    // return response with user and token to frontend client
    const { _id, name, email, role } = user;

    return res.json({ token, user: { _id, name, email, role } });
  });
});

router.get("/signout", requireSignin, (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Signout Success" });
});

module.exports = requireSignin;
module.exports = router;
