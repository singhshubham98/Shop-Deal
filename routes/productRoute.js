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
  deleteProduct,
  list,
  relatedProducts,
  listCategories,
  listBySearch,
  productPhoto,
  listSearch
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

router.get("/products", list);
router.get("/products/search", listSearch);
router.get("/products/related/:productId", relatedProducts);
router.get("/products/categories", listCategories);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", productPhoto);

router.param("productId", productById);
router.param("userId", userById);
module.exports = router;
