require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserController = require("../controllers/usuarios_controller");

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        let user = await UserController.CreateUser({ name, email, password: hashedPassword });
        res.status(201).send(`Usuario ${name} registrado correctamente! ID: ${user.id}`);
    } catch (error) {
        res.status(500).send("Error registering user.");
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    let user = await UserController.FindUserByEmail(email);

    if (!user) {
        return res.status(401).send('Usuario no encontrado');
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
        const token = jwt.sign({ email }, process.env.JWT_TOKEN_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Contraseña incorrecta');
    }
});

module.exports = router;
