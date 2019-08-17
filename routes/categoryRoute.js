const express = require("express");
const router = express.Router();
const {
  requireSignin,
  isAuth,
  isAdmin
} = require("../controllers/authController");

const { userById } = require("../controllers/userController");
const {
  createCategory,
  categoryById,
  readCategory,
  updateCategory,
  deleteCategory,
  list
} = require("../controllers/categoryController");

router.get("/category/:categoryId", readCategory);
router.post(
  "/category/create/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  createCategory
);
router.put(
  "/category/:categoryId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  updateCategory
);
router.delete(
  "/category/:categoryId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  deleteCategory
);
router.get("/categories", list);

router.param("categoryId", categoryById);
router.param("userId", userById);
module.exports = router;
