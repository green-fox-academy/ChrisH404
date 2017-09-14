'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const app = express();
const port = 3000;
const jsonParser = bodyParser.json();

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/epam';

app.listen(port);

app.get('/students', function(req, res) {
  var obj = {
    'error': 'Get students failed!'
  };
  var gender = req.query.gender;
  var fields = req.query.fields;
  var whereStr = {};
  var fieldStr = {_id: false};
  if (gender) {
    whereStr['gender'] = gender
  }
  if (fields) {
    fields.forEach(function(item) {
      fieldStr[item] = true;
    });
  }
  connectDatabase(whereStr, fieldStr, obj, res);
});

app.get('/students/:name', function(req, res) {
  var obj = {
    'error': 'Get students failed!'
  };
  var gender = req.query.gender;
  var fields = req.query.fields;
  var name = req.params.name;
  var whereStr = {};
  var fieldStr = {_id: false};
  if (gender) {
    whereStr['gender'] = gender
  }
  if (fields) {
    fields.forEach(function(item) {
      fieldStr[item] = true;
    });
  }
  if (name) {
    whereStr['name'] = name;
  }
  connectDatabase(whereStr, fieldStr, obj, res);
});

function connectDatabase(whereStr, fieldStr, obj, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    console.log('Connection established to ' + url);
    selectData(db, whereStr, fieldStr, function(result) {
      obj = {
        'students': result
      }
      res.send(obj);
    });
    db.close();
  });
}

function selectData(db, whereStr, fieldStr, callback) {
  var collection = db.collection('students');
  collection.find(whereStr, fieldStr).toArray(function(err, result) {
    if(err){
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}
