const express = require("express");
require("./database/connection");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use("/api", authRoutes);

app.get("/", (req, res) => {
    res.send("Servidor SIGMA funcionando correctamente");
});

module.exports = app;