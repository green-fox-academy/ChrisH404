'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/epam';

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the MongoDB server. Error:', err);
  }
  console.log('Connection established to ' + url);
  selectData(db, function(result) {
    console.log(result);
  });
  db.close();
});

function selectData(db, callback) {
  var collection = db.collection('students');
  var whereStr1 = {'name': 'Chris Huang'};
  var fieldStr1 = {};
  var whereStr2 = {};
  var fieldStr2 = {_id:false, github:true};
  var whereStr3 = {'name': { $ne : 'Chris Huang' }};
  var fieldStr3 = {_id:false, name:true};
  var whereStr4 = {'gender': 'male'};
  var fieldStr4 = {};
  collection.find(whereStr1,fieldStr1).toArray(function(err, result) {
    if(err){
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
  collection.find(whereStr2,fieldStr2).toArray(function(err, result) {
    if(err){
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
  collection.find(whereStr3,fieldStr3).toArray(function(err, result) {
    if(err){
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
  collection.find(whereStr4,fieldStr4).toArray(function(err, result) {
    if(err){
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}
