const express = require("express");
const router = express.Router();

const ordenTrabajoController = require("../controllers/ordenTrabajoController");

router.get("/ordenes", ordenTrabajoController.obtenerOrdenes);

router.get("/ordenes/:id", ordenTrabajoController.obtenerOrdenPorId);

router.post("/ordenes", ordenTrabajoController.crearOrden);

router.put("/ordenes/:id", ordenTrabajoController.actualizarOrden);

router.patch("/ordenes/estado/:id", ordenTrabajoController.cambiarEstadoOrden);

router.get("/ordenes/activo/:id_activo", ordenTrabajoController.obtenerOrdenesPorActivo);

router.get("/ordenes/tecnico/:id_tecnico", ordenTrabajoController.obtenerOrdenesPorTecnico);


module.exports = router;