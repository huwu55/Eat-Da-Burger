var orm = require("../config/orm.js");

var burger = {
    selectAll : function(cb){
        orm.selectAll("burgers", function(results){
            cb(results);
        });
    },

    selectBurgers : function(devoured, cb){
        orm.selectCertain("burgers", devoured, function(results){
            cb(results);
        });
    },

    insertOne : function(burgerName, cb){
        var values = [burgerName, false];
        orm.insertOne("burgers", values, function(result){

            cb(result);
        });

    },

    updateOne : function(id, cb){
        var values = [true, id];
        orm.updateOne("burgers", values, function(){
            //console.log("successfully updated burger " + id);
            cb();
        });
    }
};

module.exports = burger;