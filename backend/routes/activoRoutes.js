const express = require("express");
const router = express.Router();
const activoController = require("../controllers/activoController");


router.get("/activos/:id", activoController.obtenerActivoPorId);

router.post("/activos", activoController.crearActivo);

router.put("/activos/:id", activoController.actualizarActivo);

router.put("/activos/desactivar/:id", activoController.desactivarActivo);

module.exports = router;