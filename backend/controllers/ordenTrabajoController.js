const connection = require("../database/connection");

const obtenerOrdenes = (req, res) => {

    const sql = `
        SELECT *
        FROM ordenes_trabajo
    `;

    connection.query(sql, (error, results) => {

        if (error) {
            return res.status(500).json({
                mensaje: "Error al obtener órdenes de trabajo"
            });
        }

        res.status(200).json(results);

    });

};
const crearOrden = (req, res) => {

    const {
        numero_ot,
        tipo_mantenimiento,
        id_activo,
        id_tecnico,
        prioridad,
        descripcion,
        fecha_programada
    } = req.body;

    const sql = `
        INSERT INTO ordenes_trabajo (
            numero_ot,
            tipo_mantenimiento,
            id_activo,
            id_tecnico,
            prioridad,
            descripcion,
            fecha_programada
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(
        sql,
        [
            numero_ot,
            tipo_mantenimiento,
            id_activo,
            id_tecnico,
            prioridad,
            descripcion,
            fecha_programada
        ],
        (error, results) => {

            if (error) {
                return res.status(500).json({
                    mensaje: "Error al crear la orden de trabajo"
                });
            }

            res.status(201).json({
                mensaje: "Orden creada correctamente",
                id_ot: results.insertId
            });

        }
    );

};
const obtenerOrdenPorId = (req, res) => {

    const { id } = req.params;

    const sql = `
        SELECT *
        FROM ordenes_trabajo
        WHERE id_ot = ?
    `;

    connection.query(sql, [id], (error, results) => {

        if (error) {
            return res.status(500).json({
                mensaje: "Error al consultar la orden"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                mensaje: "Orden no encontrada"
            });
        }

        res.status(200).json(results[0]);

    });

};
const actualizarOrden = (req, res) => {

    const { id } = req.params;

    const {
        tipo_mantenimiento,
        id_activo,
        id_tecnico,
        prioridad,
        estado,
        descripcion,
        observaciones,
        fecha_programada,
        fecha_finalizacion
    } = req.body;

    const sql = `
        UPDATE ordenes_trabajo
        SET
            tipo_mantenimiento = ?,
            id_activo = ?,
            id_tecnico = ?,
            prioridad = ?,
            estado = ?,
            descripcion = ?,
            observaciones = ?,
            fecha_programada = ?,
            fecha_finalizacion = ?
        WHERE id_ot = ?
    `;

    connection.query(
        sql,
        [
            tipo_mantenimiento,
            id_activo,
            id_tecnico,
            prioridad,
            estado,
            descripcion,
            observaciones,
            fecha_programada,
            fecha_finalizacion,
            id
        ],
        (error) => {

            if (error) {
                return res.status(500).json({
                    mensaje: "Error al actualizar la orden"
                });
            }

            res.status(200).json({
                mensaje: "Orden actualizada correctamente"
            });

        }
    );
};
const cambiarEstadoOrden = (req, res) => {

    const { id } = req.params;
    const { estado } = req.body;

    const sql = `
        UPDATE ordenes_trabajo
        SET estado = ?
        WHERE id_ot = ?
    `;

    connection.query(sql, [estado, id], (error) => {

        if (error) {
            return res.status(500).json({
                mensaje: "Error al cambiar el estado"
            });
        }

        res.status(200).json({
            mensaje: "Estado actualizado correctamente"
        });

    });

};
const obtenerOrdenesPorActivo = (req, res) => {

    const { id_activo } = req.params;

    const sql = `
        SELECT *
        FROM ordenes_trabajo
        WHERE id_activo = ?
    `;

    connection.query(sql, [id_activo], (error, results) => {

        if (error) {
            return res.status(500).json({
                mensaje: "Error al consultar órdenes del activo"
            });
        }

        res.status(200).json(results);

    });

};
const obtenerOrdenesPorTecnico = (req, res) => {

    const { id_tecnico } = req.params;

    const sql = `
        SELECT *
        FROM ordenes_trabajo
        WHERE id_tecnico = ?
    `;

    connection.query(sql, [id_tecnico], (error, results) => {

        if (error) {
            return res.status(500).json({
                mensaje: "Error al consultar órdenes del técnico"
            });
        }

        res.status(200).json(results);

    });

};
module.exports = {
    obtenerOrdenes,
    crearOrden,
    obtenerOrdenPorId,
    actualizarOrden,
    cambiarEstadoOrden,
    obtenerOrdenesPorActivo,
    obtenerOrdenesPorTecnico
};