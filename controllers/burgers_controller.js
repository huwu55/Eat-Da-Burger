var burger = require("../models/burger.js");

module.exports = function(app){
    app.set('view engine', 'ejs');

    app.get('/burger/api', function(req, res){
        burger.selectAll(function(results){
            res.json(results);
        });
    });

    app.post('/burger/insert', function(req, res){
        var burgerName = req.body.burger_name;

        burger.insertOne(burgerName, function(burger_id){

            res.send({id: burger_id});
        });
    });

    app.post('/burger/update', function(req, res){
        //console.log(req.body);
        var id = parseInt(req.body.id);
        //console.log(id);
        burger.updateOne(id, function(){

            res.send(true);
        });
    });

    app.get('*', function(req, res) {
        var burgers, devouredBurgers;

        burger.selectBurgers(false, function(results){
            burgers = results;
            
            burger.selectBurgers(true, function(results){
                devouredBurgers = results;

                res.render('index', {
                    burgers,
                    devouredBurgers
                });
            });
        });
    });

}