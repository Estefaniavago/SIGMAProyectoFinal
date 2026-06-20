const express = require("express");
require("./database/connection");

const authRoutes = require("./routes/authRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const activoRoutes = require("./routes/activoRoutes");

const app = express();

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", usuarioRoutes);
app.use("/api", activoRoutes);

app.get("/", (req, res) => {
    res.send("Servidor SIGMA funcionando correctamente");
});

module.exports = app;