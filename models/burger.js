var orm = require("../config/orm.js");

var burger = {
    selectAll : function(cb){
        orm.selectAll("burgers", function(results){
            cb(results);
        });
    },

    insertOne : function(burgerName){
        var values = ["burgers", burgerName, false];
        orm.insertOne(values, function(){
            console.log("successfully inserted " + burgerName);
        });

    },

    updateOne : function(id){
        var values = ["burgers", "devoured", true, "id", id];
        orm.updateOne(values, function(){
            console.log("successfully updated burger " + id);
        });
    }
};

module.exports = burger;