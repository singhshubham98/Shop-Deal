const express = require("express");
const router = express.Router();
const {
  requireSignin,
  isAuth,
  isAdmin
} = require("../controllers/authController");

const {
  userById,
  categoryById,
  readCategory
} = require("../controllers/userController");
const { create } = require("../controllers/categoryController");

router.get("/category/:categoryId", readCategory);
router.post("/category/create/:userId", requireSignin, isAuth, isAdmin, create);

router.param("categoryId", categoryById);
router.param("userId", userById);
module.exports = router;
