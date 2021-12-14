const { clear } = require('console');
const express = require('express');
const path = require('path');
const connection = require('../public/scripts/dbconnection.js');
const tipoRoute = express.Router();

tipoRoute.get('/', function(req, res) {
    connection.query('SELECT * FROM tipos ', function(err, result) {
        if (err) {
            console.log('Erro: ' + err);
            throw err;
        }else{
            res.json(result);
        }
    })
})

module.exports = tipoRoute;