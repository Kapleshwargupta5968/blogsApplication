const express = require("express");
const router = express.Router();
const authProtector = require("../middlewares/authMiddleware");
const {signup, signin, me} = require("../controllers/authController");

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/me", authProtector, me);

module.exports = router;