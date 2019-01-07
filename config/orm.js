var connection = require("./connection.js");

// connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
   
//     console.log('connected as id ' + connection.threadId);
// });

var ORM = {
    selectAll : function(tableInput, cb){
        //console.log("tableInput: " + tableInput);
        connection.query("SELECT * FROM " + tableInput, function(error, results, fields){
            if (error) return console.log(error);

            cb(results);
        });
    },

    selectCertain : function(tableInput, value, cb){
        connection.query("SELECT * FROM " + tableInput + " where devoured = ?", [value], function(error, results, fields){
            if (error) return console.log(error);

            cb(results);
        });
    },

    //values = [tableInput, burgerName, devoured]
    insertOne : function(tableInput, values, cb){
        //console.log(values);
        connection.query("INSERT INTO " + tableInput + " (burger_name, devoured) VALUES (?, ?)",
            values, function(error, results, fields){
                if(error) console.log(error);

                //return inserted item ID
                ORM.selectAll(tableInput, function(results){
                    cb(results.length);
                });
                
            });
    },
    //values = [tableInput, columnName1, columnValue1, columnName2, columnValue2]
    updateOne : function(tableInput, values, cb){
        connection.query("UPDATE " + tableInput + " SET devoured = ? WHERE id = ?", values, 
            function(error, results, fields){
                if (error) console.log(error);
                cb();
            });
    }
};

module.exports = ORM;