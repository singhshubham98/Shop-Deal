const express = require("express");
const router = express.Router();

const {
  isAuth,
  isAdmin,
  requireSignin
} = require("../controllers/authController");
const {
  create,
  productById,
  readProduct,
  editProduct,
  deleteProduct
} = require("../controllers/productController");
const { userById } = require("../controllers/userController");

router.get("/product/:productId", readProduct);
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);
router.put(
  "/product/:productId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  editProduct
);

router.delete(
  "/product/:productId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  deleteProduct
);

router.param("productId", productById);
router.param("userId", userById);
module.exports = router;
