const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'public'))) //repasar


app.get('/query_parameters', (req, res) => {
    const clave = req.query.clave;
    console.log(clave)
    res.send(`Hola, ${clave}!`);
});

// Middleware para parsear el cuerpo (body) de las solicitudes
app.use(express.urlencoded({ extended: true })); //repasar

app.post('/post_request', (req, res) => {
    const mensaje = req.body.mensaje;
    const nombre = req.body.nombre;
    console.log(mensaje, nombre)
    res.send(`Mensaje recibido: ${mensaje}, ${nombre}`);
});

// Middleware para parsear JSON
app.use(express.json());

app.post('/json', (req, res) => {
    const nombre = req.body.nombre
    res.send(`Hola, ${nombre}!`);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});