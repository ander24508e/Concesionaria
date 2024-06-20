const express = require("express");
const router = express.Router();
const vehiculoController = require('../controllers/vehiculo_controller');

router.get("/", async (req, res) => {
    try {
        const result = await vehiculoController.GetVehiculos();
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const result = await vehiculoController.GetVehiculosById(req.params.id);
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const result = await vehiculoController.CreateVehiculos(req.body);
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const result = await vehiculoController.UpdateVehiculos(req.params.id, req.body);
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const result = await vehiculoController.DeleteVehiculos(req.params.id);
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
});

module.exports = router;