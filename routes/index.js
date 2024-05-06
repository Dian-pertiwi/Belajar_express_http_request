/**
 * Langkah 7.2: Pembuatan Routing untuk sistem Auth
 * buat file index.js untuk mengakses halaman home dan profile.
 */

var express = require("express");
var router = express.Router();
var homeController = require("../controller").home;
var profileController = require("../controller").profile;
var verifyUser = require("../library/verify");

router.get("/", verifyUser.isLogin, homeController.home);
router.get("/profile", verifyUser.isLogin, profileController.profile);

module.exports = router;
