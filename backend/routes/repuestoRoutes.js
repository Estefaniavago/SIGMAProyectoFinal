const express = require("express");
const router = express.Router();

const repuestoController = require("../controllers/repuestoController");

router.get(
    "/repuestos",
    repuestoController.obtenerRepuestos
);

router.post(
    "/repuestos",
    repuestoController.crearRepuesto
);

module.exports = router;