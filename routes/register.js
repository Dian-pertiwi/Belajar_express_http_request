//langkah 7 : Membuat Routing atau pengaturan rute untuk sistem Auth

//Definisikan router dari express
const router = require("express").Router();
//Ambil index.js dari controller dan panggil variabel didalamnya
const registerController = require("../controller").register;
//Definisikan middleware verify.js
const verifyUser = require("../library/verify");

// Rute 'http:localhost:3000/register/'digunakan utk menampilkan form register
router.get("/", verifyUser.isLogout, registerController.formRegister);
//Rute 'http:localhost:3000/register/save' digunakan untuk menyimpan data yang di input saat register
router.post("/save", verifyUser.isLogout, registerController.saveRegister);

//Export agar dapat dibaca oleh express
module.exports = router;
