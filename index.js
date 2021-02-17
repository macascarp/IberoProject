// Importamos mongoose, cors y express

const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

// Importo el router AUTO
const auto = require('./routes/auto')

// Usar Express
const app = express()
// Usar corse como middleware
app.use(cors())
// Se manejara con json
app.use(express.json())
// Usar la URL /api/auto
app.use("/api/auto", auto)

const port = process.env.port || 3000

app.listen(port,()=>{
    console.log("Ejecutando en puerto: ", port)
})

mongoose.connect("mongodb://localhost/autos", {
     useNewUrlParser: true,
     useFindAndModify: false,
     useCreateIndex: true,
     useUnifiedTopology: true,
}).then(()=>{
    console.log("Connexion a MongoDB exitosa");
})

.catch((error)=>{
    console.log("ERROR DE CONEXION A MONGODB", error);
})