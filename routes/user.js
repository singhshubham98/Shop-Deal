const express = require("express");
const router = express.Router();

const { signup, signin, signout } = require("../controllers/user");
const { signupValidator } = require("../validator/validate");

router.post("/signup", signupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
