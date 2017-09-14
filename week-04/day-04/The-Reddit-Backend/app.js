'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var database = require('./db.js');

var app = express();
var port = 3000;
var jsonParser = bodyParser.json();

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/reddit';

app.listen(port);

app.get('/hello', function(req, res) {
  res.send('hello world');
});

// get posts
app.get('/posts', function(req, res) {
  var obj = {
    'error': 'Get posts failed!'
  };
  var whereStr = {};
  var fieldStr = {_id: false};
  database.queryDatabase(res, obj, whereStr, fieldStr);
});

// add posts
app.post('/posts', jsonParser, function(req, res) {
  var obj = {
    'title': req.body.title,
    'href': req.body.href,
    'timestamp': Date.parse(new Date()),
    'score': 0,
    'owner': null,
    'vote':0
  }
  database.insertIntoDB(obj, res);
});
