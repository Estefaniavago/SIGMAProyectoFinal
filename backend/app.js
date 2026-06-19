const express = require("express");
require("./database/connection");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor SIGMA funcionando correctamente");
});

module.exports = app;