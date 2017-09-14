'use strict';

var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectId;

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/reddit';

function queryDatabase(obj, whereStr, fieldStr, callback) {
  MongoClient.connect(url, function (err, db) {
    selectData(db, whereStr, fieldStr, function(result) {
      obj = {
        'posts': result
      }
      callback(obj);
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

function insertIntoDB(obj, callback) {
  MongoClient.connect(url, function (err, db) {
    insertData(db, obj, function(result) {
      callback(obj);
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

function votePosts(_id, res, voteType, callback) {
  var whereStr = {'_id': ObjectId(_id)};
  var fieldStr = {};
  var updateStr = {};
  MongoClient.connect(url, function (err, db) {
    selectData(db, whereStr, fieldStr, function(result) {
      updateStr = result[0];
      if (voteType === 'upvote') {
        updateStr.score++;
      }else {
        updateStr.score--;
      }
      updateData(db, whereStr, updateStr)
      callback(updateStr);
      db.close();
    });
  });
}

function updateData(db, whereStr, updateStr) {
  var collection = db.collection('posts');
  collection.update(whereStr,updateStr, function(err) {
    if(err){
      console.log('Error:'+ err);
      return;
    }     
  });
}

module.exports = {
  queryDatabase: queryDatabase,
  insertIntoDB: insertIntoDB,
  votePosts: votePosts
};