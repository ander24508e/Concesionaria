const express = require("express");
const router = express.Router();
const especificacionesController = require('../controllers/especificaciones_controller');

router.get("/", async (req, res) => {
    try {
        const result = await especificacionesController.GetEspecificaciones();
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const result = await especificacionesController.GetEspecificacionesById(req.params.id);
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const result = await especificacionesController.CreateEspecificaciones(req.body);
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const result = await especificacionesController.UpdateEspecificaciones(req.params.id, req.body);
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const result = await especificacionesController.DeleteEspecificaciones(req.params.id);
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
});

module.exports = router;