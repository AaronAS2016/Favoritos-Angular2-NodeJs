'use strict'
var port = process.env.PORT || 3678;
var app = require('./app');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cursofavoritos',(err, res) =>{

    if(err){
        throw err;

    }else{
        console.log('Conexión a MongoDb correcta')
        app.listen(port, function(){
            console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
        });
    }

});

