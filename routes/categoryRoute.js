const express = require("express");
const router = express.Router();
const {
  requireSignin,
  isAuth,
  isAdmin
} = require("../controllers/authController");

const { userById } = require("../controllers/userController");
const { create } = require("../controllers/categoryController");

router.post("/category/create/:userId", requireSignin, isAuth, isAdmin, create);

router.param("userId", userById);
module.exports = router;
