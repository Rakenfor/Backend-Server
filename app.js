//Requires
var express = require('express');
var mongoose = require('mongoose');

//Inicializar variables
var app = express();

//Conección a la base d datos
mongoose.connect('mongodb://localhost:27017/HospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de hospitales:\x1b[32m%s\x1b[0m', ' online')
});

//rutas (tipo de petición)
app.get('/', (red, res, next) => {
    res.status(200).json({
        ok: true,
        messaje: 'Petición Realizada correctamente'
    });
});

//Escuchar peticiones con el puero
app.listen(3000, () => {
    console.log('Expres server puerto 3000:\x1b[32m%s\x1b[0m', ' online')
});