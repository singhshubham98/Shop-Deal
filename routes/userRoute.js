const express = require("express");
const router = express.Router();

const {
  requireSignin,
  isAuth,
  isAdmin
} = require("../controllers/authController");

const {
  userById,
  readUserProfile,
  updateUserProfile
} = require("../controllers/userController");

router.get("/secret/:userId", requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile
  });
});

router.get("/user/:userId", readUserProfile);
router.put("/user/:userId", updateUserProfile);

router.param("userId", userById);

module.exports = router;
