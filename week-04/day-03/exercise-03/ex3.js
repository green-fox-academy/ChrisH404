'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/epam';

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the MongoDB server. Error:', err);
  }
  console.log('Connection established to ' + url);
  updateData(db, function(result) {
    console.log(result);
  });
  db.close();
});

function updateData(db, callback) {
  var collection = db.collection('students');
  var whereStr1 = {'name': 'John Doe'};
  var updateStr1 = {$set: { 'github' : 'johndoe' }};
  var whereStr2 = {'name': 'Chris Huang'};
  var updateStr2 = {$set: { 'age' : 24 }};
  collection.update(whereStr1,updateStr1, function(err, result) {
    if(err){
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
  collection.update(whereStr2,updateStr2, function(err, result) {
    if(err){
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}