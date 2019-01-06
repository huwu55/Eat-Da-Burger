var burger = require("../models/burger.js");

//var express = require('express');

// var app = express();

// var PORT = process.env.PORT || 3000;

module.require = function(app){
    app.set('view engine', 'ejs');

    app.get('*', function(req, res) {
        var burgers, devouredBurgers;

        res.render('index', {
            burgers,
            devouredBurgers
        });
    });
}