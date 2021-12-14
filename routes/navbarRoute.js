const { clear } = require('console');
const express = require('express');
const path = require('path');
const navbarRoute = express.Router();

navbarRoute.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, '../public/nav.html'));
})

module.exports = navbarRoute;