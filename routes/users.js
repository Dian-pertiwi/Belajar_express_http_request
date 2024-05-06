var express = require("express");
var router = express.Router();

/* GET users listing. */
// Request.method
//code ini adalah endpoint yang mengirimkan pesan "Halo Gamelab" kepada client ketika menerima HTTP GET request pada route utama.
router.get("/", function (req, res) {
  console.log(req.method);
  res.send("Halo Gamelab");
});

//menambahkan middleware body-parser untuk memproses data permintaan sebelum mengakses properti body
/**
 * code ini adalah endpoint yang mengirimkan pesan "Data sudah diterima"
 * kepada client ketika menerima HTTP POST request pada route utama, dan juga mencetak data
 * yang dikirim oleh client ke konsol server.
 */
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.post("/", function (req, res) {
  console.log(req.body);
  res.send("Data sudah diterima");
});

//request query
router.get("/kueri", function (req, res) {
  var nama = req.query.nama;
  var usia = req.query.usia;
  console.log(nama, usia);
  res.json({ nama, usia });
});

//Jika kita ingin mengakses path dari permintaan, maka kita bisa menggunakan properti request.path.
router.post("/users/:id", function (req, res) {
  var id = req.params.id;
  var path = req.path;
  console.log(id, path);
  res.json({ id, path });
});

//mengakses headers dari permintaan, kita bisa menggunakan properti request.headers
router.get("/header", function (req, res) {
  var userAgent = req.headers["user-agent"];
  console.log(userAgent);
  res.send(userAgent);
});

//Request.auth
const users = {
  dian: {
    username: "dian",
    password: "dian123",
  },
};

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Tidak ada akses" });
  }

  const [type, credentials] = authHeader.split(" ");
  if (type !== "Basic") {
    return res.status(401).json({ message: "Tidak ada akses" });
  }

  const [username, password] = Buffer.from(credentials, "base64")
    .toString()
    .split(":");
  const user = users[username];
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Tidak ada akses" });
  }

  req.auth = { username };
  next();
};

router.use(authenticate);

router.get("/profile", (req, res) => {
  res.json({
    message: "Selamat Datang Dian Pertiwi",
    user: req.auth,
  });
});

module.exports = router;
