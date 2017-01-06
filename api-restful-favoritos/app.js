'use strict'

var express = require('express');
var bodyparser = require('body-parser');

var api = require('./routes/favorito');
var app = express();


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow',  'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', api);

module.exports = app;