/**
 * Langkah 7.1 - Pembuatan Routing untuk sistem auth
 */

// const router = require("express").Router();
// const loginController = require("../controller").login;
// const verifyUser = require("../library/verify");

// router.get("/", verifyUser.isLogout, loginController.login);
// router.get("/logout", loginController.logout);

// router.post("/auth", loginController.loginAuth);

// module.exports = router;

const router = require("express").Router();
const loginController = require("../controller").login;
const verifyUser = require("../library/verify");

router.get("/", loginController.login);
router.get("/logout", verifyUser.isLogout, loginController.logout);

router.post("/auth", loginController.loginAuth);

module.exports = router;

/**
 * Jadi, secara keseluruhan, kode tersebut menangani routing untuk sistem autentikasi dalam aplikasi web,
 * termasuk penanganan tampilan halaman login, logout, dan proses autentikasi pengguna.
 */
