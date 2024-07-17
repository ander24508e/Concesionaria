require("dotenv").config()

const express = require("express")

const port = process.env.APP_PORT
const app = express()
const vehiculo = require('./routes/vehiculoRoutes');
const especificaciones = require('./routes/especificacionesRoutes');
const fabricantes = require('./routes/fabricantesRoutes');
const usuarios = require('./routes/usuariosRoutes');
const jwt = require('jsonwebtoken');
const path = require('path');

// Middleware para autenticar usuarios
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
        jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

app.use(express.json())

app.use("/vehiculos", vehiculo);
app.use("/especificar", especificaciones);
app.use("/fabricar", fabricantes);
app.use('/auth', usuarios);

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
});

app.listen(port, () =>{
    console.log("El servidor", port, "se ha iniciado exitosamente.")
});
