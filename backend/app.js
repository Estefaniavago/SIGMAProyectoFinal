const express = require("express");
require("./database/connection");




const app = express();

const authRoutes = require("./routes/authRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const activoRoutes = require("./routes/activoRoutes");
const ordenTrabajoRoutes = require("./routes/ordenTrabajoRoutes");
const inspeccionRoutes = require("./routes/inspeccionRoutes");

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", usuarioRoutes);
app.use("/api", activoRoutes);
app.use("/api", ordenTrabajoRoutes);
app.use("/api", inspeccionRoutes);

app.get("/", (req, res) => {
    res.send("Servidor SIGMA funcionando correctamente");
});

module.exports = app;