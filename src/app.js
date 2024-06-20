require("dotenv").config()

const express = require("express")
const port = process.env.APP_PORT
const app = express()
const vehiculo = require('./routes/vehiculoRoutes');
const especificaciones = require('./routes/especificacionesRoutes');
const fabricantes = require('./routes/fabricantesRoutes');

app.use(express.json())

app.use("/vehiculos", vehiculo);
app.use("/especificar", especificaciones);
app.use("/fabricar", fabricantes);

app.listen(port, () =>{
    console.log("El servidor", port, "se ha iniciado exitosamente.")
});