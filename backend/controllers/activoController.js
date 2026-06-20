const connection = require("../database/connection");

const obtenerActivos = (req, res) => {

    const sql = `
        SELECT *
        FROM activos
    `;

    connection.query(sql, (error, results) => {

        if (error) {
            return res.status(500).json({
                mensaje: "Error al obtener activos"
            });
        }

        res.status(200).json(results);

    });

};

module.exports = {
    obtenerActivos
};