var connection = require("./connection.js");

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
});

var ORM = {
    selectAll : function(tableInput, cb){
        connection.query("SELECT * FROM ?",[tableInput], function(error, results, fields){
            if (error) return console.log(error);

            cb(results);
        });
    },
    //values = [tableInput, burgerName, devoured]
    insertOne : function(values, cb){
        connection.query("INSERT INTO ? (burger_name, devoured) VALUES (?, ?)",
            values, function(error, results, fields){
                if(error) console.log(error);
                cb();
            });
    },
    //values = [tableInput, columnName1, columnValue1, columnName2, columnValue2]
    updateOne : function(values, cb){
        connection.query("UPDATE ? SET ? = ? WHERE ? = ?", values, 
            function(error, results, fields){
                if (error) console.log(error);
                cb();
            });
    }
};

module.exports = ORM;