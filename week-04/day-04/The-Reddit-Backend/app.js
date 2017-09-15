'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var database = require('./db.js');

var app = express();
var port = 3000;
var jsonParser = bodyParser.json();

app.use(express.static('public_html'));

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
  var fieldStr = {};
  database.queryDatabase(obj, whereStr, fieldStr, function(result) {
    res.send(result);
  });
});

// add posts
app.post('/posts', jsonParser, function(req, res) {
  var obj = {
    'title': req.body.title,
    'href': req.body.href,
    'timestamp': Date.parse(new Date()),
    'score': 0,
    'owner': req.headers.username ? req.headers.username : null,
    'vote':0
  }
  database.insertIntoDB(obj, function(result) {
    res.send(result);
  });
});

// upvote
app.put('/posts/:id/upvote', function(req, res) {
  var _id = req.params.id;
  database.votePosts(_id, 'upvote', function(result) {
    res.send(result);
  });
});

// downvote
app.put('/posts/:id/downvote', function(req, res) {
  var _id = req.params.id;
  database.votePosts(_id, 'downvote', function(result) {
    res.send(result);
  });
});

// delete
app.delete('/posts/:id', function(req, res) {
  var _id = req.params.id;
  var username = req.headers.username ? req.headers.username : null;
  database.deletePosts(_id, username, function(result) {
    res.send(result);
  });
});

// modify
app.put('/posts/:id', jsonParser, function(req, res) {
  var obj = {
    '_id': req.params.id,
    'title': req.body.title,
    'href': req.body.href,
    'owner': req.headers.username ? req.headers.username : null
  }
  database.modifyPosts(obj, function(result) {
    res.send(result);
  });
});