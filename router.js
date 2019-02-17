var express = require('express');
var app = express()
var router = express.Router();

router.get('/api/getTasks', function(req, res) {

	var mysql = require('mysql');

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	});
	
	res.sendStatus(200)
	
});