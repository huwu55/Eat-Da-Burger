var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;

var burgerRoutes = require('./controllers/burgers_controller.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

burgerRoutes(app);

app.listen(PORT, function() {
    console.log("Server started on port", PORT);
});