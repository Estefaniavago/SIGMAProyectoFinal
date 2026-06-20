const express = require("express");
const router = express.Router();

const activoController = require("../controllers/activoController");

router.get("/activos", activoController.obtenerActivos);


module.exports = router;