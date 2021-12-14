const { clear } = require('console');
const express = require('express');
const path = require('path');
const app = express();
const connection = require('./public/scripts/dbconnection.js');
app.use(express.static('./public'));



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/inserirAlunos.html', function(req, res) {
    res.sendFile(path.join(__dirname, './public/inserirAlunos.html'));
})

app.get('/consultarAlunos.html', function(req, res) {
    res.sendFile(path.join(__dirname, './public/consultarAlunos.html'));
})

app.get('/login.html', function(req, res) {
    res.sendFile(path.join(__dirname, './public/login.html'));
})

app.get('/navbar',function(req, res) {
    res.sendFile(path.join(__dirname, './public/nav.html'));
})

app.get('/tipos', function(req, res) {
    connection.query('SELECT * FROM tipos ', function(err, result) {
        if (err) {
            console.log('Erro: ' + err);
            throw err;
        }else{
            res.json(result);
        }
    })
})

const port = 3000;

app.listen(port, () => {
    console.log(`Listenning on port ${port}`);
})