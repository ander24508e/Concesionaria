const express = require("express");
const router = express.Router();
const fabricanteController = require('../controllers/fabricantes_controller');

router.get("/", async (req, res) => {
    try {
        const result = await fabricanteController.GetFabricante();
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const result = await fabricanteController.GetFabricanteById(req.params.id);
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const result = await fabricanteController.CreateFabricante(req.body);
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const result = await fabricanteController.UpdateFabricante(req.params.id, req.body);
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const result = await fabricanteController.DeleteFabricante(req.params.id);
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
});

module.exports = router;