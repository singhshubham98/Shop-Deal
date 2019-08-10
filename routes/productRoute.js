const express = require("express");
const router = express.Router();

const {
  isAuth,
  isAdmin,
  requireSignin
} = require("../controllers/authController");
const { create } = require("../controllers/productController");
const { userById } = require("../controllers/userController");

router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);

router.param("userId", userById);
module.exports = router;
