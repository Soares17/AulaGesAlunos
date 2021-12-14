const { clear } = require('console');
const express = require('express');
const path = require('path');
const app = express();
const connection = require('./public/scripts/dbconnection.js');
app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

//rotas para os pedidos
app.use('/', require('./routes/mainRoute'))
app.use('/navbar', require('./routes/navbarRoute'))
app.use('/tipos', require('./routes/tipoRoute'))
app.use('/utilizador', require('./routes/utilizadorRoute'))


const port = 3000;

app.listen(port, () => {
    console.log(`Listenning on port ${port}`);
})