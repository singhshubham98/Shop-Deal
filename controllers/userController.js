const User = require("../models/userSchema");

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found"
      });
    }
    req.profile = user;
    next();
  });
};

exports.readUserProfile = (req, res) => {
  req.profile.hash_password = undefined;
  req.profile.salt = undefined;

  return res.json(req.profile);
};

exports.updateUserProfile = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "You are not able to perform this action."
        });
      }
      user.hash_password = undefined;
      user.salt = undefined;
      res.json(user);
    }
  );
};
