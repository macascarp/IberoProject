 const express = require('express')

 const router = express.Router()

 const Auto = require('../model/auto')
 
router.get('/listaAutos', async(req,res) => {
    const autos = await Auto.find()
    res.send(autos)
})


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
 
