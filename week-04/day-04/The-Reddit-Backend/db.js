'use strict';

var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/reddit';

function queryDatabase(res, obj, whereStr, fieldStr) {
  MongoClient.connect(url, function (err, db) {
    selectData(db, whereStr, fieldStr, function(result) {
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

// function getMaxId() {
//   var maxId;
//   MongoClient.connect(url, function (err, db) {
//     db.collection('posts').find().sort({id: -1}).limit(1).toArray(function(err, result) {
//       if(err){
//         console.log('Error:'+ err);
//         return;
//       }
//       maxId = result[0].id;
//       console.log(maxId);
//     });
//     db.close();
//   });
  
// }

function insertIntoDB(obj,res) {
  MongoClient.connect(url, function (err, db) {
    insertData(db, obj, function(result) {
      console.log(result);
      res.send(obj);
    });
    db.close();
  });
}

function insertData(db, obj, callback) {
  var collection = db.collection('posts');
  collection.insert(obj, function(err, result) { 
    if(err){
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}

module.exports = {
  queryDatabase: queryDatabase,
  selectData: selectData,
  insertIntoDB: insertIntoDB,
  insertData: insertData
};