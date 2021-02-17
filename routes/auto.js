 const express = require('express')

 // Servicio de router en Express
 const router = express.Router()

 // Enlace a archivo AUTO
 const Auto = require('../model/auto')

 /* -------------------PRIMER PETICION---------------------- */

 // Cuando haga un GET en http://localhost:3000/listaAutos, me devolvera lo de abajo
 // Las promesas sirven para que  
router.get('/listaAutos', async(req,res) => {
    const autos = await Auto.find()
    res.send(autos)
})

// Cuando haga un POST en http://localhost:3000/, pedira el formato de debajo

router.post('/', async(req, res) => {
    const auto = new Auto ({
        marca: req.body.marca,
        modelo: req.body.modelo,
        color: req.body.color,
        precio: req.body.precio,
    })

    const result = await auto.save()
    res.status(200).send(result)
})

module.exports = router
 