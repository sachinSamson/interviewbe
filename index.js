var express = require('express');
var app = express();
var users = require('./users.js');
const bodyParser = require('body-parser');


// app.get('/', function(req, res){
//    res.send("Hello world!");
// });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users', users);




app.listen(3000);
