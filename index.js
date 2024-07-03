const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send("Hello World")
})

app.get('/oi', function (req, res) {
    res.send("Olá, mundo!")
})

// Lista de Personagens
const lista = ['Rick Sanchez', 'Morty Smith', 'Summer Smith']

// Read All - [GET] /item
app.get('/item', function (req, res) {
    // Pegamos a lista e enviamos como resposta HTTP
res.send(lista)
})

// Create - [POST] /item
app.post('/item', function (req, res) {
res.send('Create')
})    

app.listen(3000)
