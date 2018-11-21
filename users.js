var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/register');

var router = express.Router();

var personSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});
var Person = mongoose.model("Person", personSchema);

router.get('/', function(req, res){
	Person.find(function(err, response){
   console.log(response);
   res.send(response);
});
});
router.post('/', function(req, res){
	var userdata = req.query;
	console.log(userdata);
	 var newPerson = new Person({
          name: userdata.name,
          age: userdata.age,
          nationality: "Indian"
       });
	  newPerson.save(function(err, Person){
       });
 if(userdata){
   res.send("dataadded");

 }else{

 }
});

module.exports = router;