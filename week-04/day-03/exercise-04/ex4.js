'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/epam';

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the MongoDB server. Error:', err);
  }
  console.log('Connection established to ' + url);
  deleteData(db, function(result) {
    console.log(result);
  });
  db.close();
});

function deleteData(db, callback) {
  var collection = db.collection('students');
  var whereStr = {'name': 'John Doe'};
  collection.remove(whereStr, function(err, result) {
    if(err){
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}