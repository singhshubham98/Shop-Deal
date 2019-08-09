const express = require("express");
const router = express.Router();
const User = require("../models/user");
const requireSignin = require("../routes/auth");

router.get("/secret/:userId", requireSignin, (req, res, next) => {
  User.findById(req.params.userId).then((user, err) => {
    if (err || !user) {
      return res.status(400).json({ err: "User not exist" });
    }
    res.json(user);
    next();
  });
});
module.exports = router;
