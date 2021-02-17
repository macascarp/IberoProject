
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const auto = require('./routes/auto')

const app = express()

app.use(cors())

app.use(express.json())

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
