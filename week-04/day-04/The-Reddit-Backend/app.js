'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var app = express();
var port = 3000;
var jsonParser = bodyParser.json();

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/reddit';

app.listen(port);

app.get('/hello', function(req, res) {
  res.send('hello world');
});

app.get('/posts', function(req, res) {
  var obj = {
    'error': 'Get posts failed!'
  };
  var whereStr = {};
  var fieldStr = {_id: false};
  queryDatabase(res, obj, whereStr, fieldStr);
});

function queryDatabase(res, obj, whereStr, fieldStr) {
  MongoClient.connect(url, function (err, db) {
    selectData(db, whereStr, fieldStr, function(result) {
      console.log(result);
      obj = {
        'posts': result
      }
      res.send(obj);
    });
    db.close();
  });
}

function selectData(db, whereStr, fieldStr, callback) {
  var collection = db.collection('posts');
  collection.find(whereStr, fieldStr).toArray(function(err, result) {
    if(err){
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}
