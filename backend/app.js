const express = require("express");
require("./database/connection");




const app = express();

const authRoutes = require("./routes/authRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const activoRoutes = require("./routes/activoRoutes");
const ordenTrabajoRoutes = require("./routes/ordenTrabajoRoutes");
const inspeccionRoutes = require("./routes/inspeccionRoutes");
const intervencionRoutes = require("./routes/intervencionRoutes");
const repuestoRoutes = require("./routes/repuestoRoutes");
const consumoRepuestoRoutes = require("./routes/consumoRepuestoRoutes");


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", usuarioRoutes);
app.use("/api", activoRoutes);
app.use("/api", ordenTrabajoRoutes);
app.use("/api", inspeccionRoutes);
app.use("/api", intervencionRoutes);
app.use("/api", repuestoRoutes);
app.use("/api", consumoRepuestoRoutes);

app.get("/", (req, res) => {
    res.send("Servidor SIGMA funcionando correctamente");
});

module.exports = app;