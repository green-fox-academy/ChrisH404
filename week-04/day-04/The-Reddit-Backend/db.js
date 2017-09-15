'use strict';

var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectId;

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/reddit';

// get posts
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

// add posts
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

// upvote & downvote
function votePosts(_id, voteType, callback) {
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

// delete posts
function deletePosts(_id, username, callback) {
  var whereStr = {'_id': ObjectId(_id)};
  var fieldStr = {};
  MongoClient.connect(url, function (err, db) {
    selectData(db, whereStr, fieldStr, function(result) {
      if (result[0].owner === username || !result[0].owner) {
        deleteData(db, whereStr);
        callback(result[0]);
      }else {
        callback({'error': 'You have no right to delete this post!'});
      }
      db.close();
    });
  });
}

function deleteData(db, whereStr) {
  var collection = db.collection('posts');
  collection.remove(whereStr, function(err) {
    if(err){
      console.log('Error:'+ err);
      return;
    }
  });
}

// modify posts
function modifyPosts(obj, callback) {
  var whereStr = {'_id': ObjectId(obj._id)};
  var fieldStr = {};
  var updateStr = {};
  MongoClient.connect(url, function (err, db) {
    selectData(db, whereStr, fieldStr, function(result) {
      updateStr = result[0];
      if (updateStr.owner === obj.owner || !updateStr.owner){
        updateStr.title = obj.title;
        updateStr.href = obj.href;
        updateStr.timestamp = Date.parse(new Date());
        updateData(db, whereStr, updateStr)
        callback(updateStr);
      }else {
        callback({'error': 'You have no right to modify this post!'});
      }
      db.close();
    });
  });
}

module.exports = {
  queryDatabase: queryDatabase,
  insertIntoDB: insertIntoDB,
  votePosts: votePosts,
  deletePosts: deletePosts,
  modifyPosts: modifyPosts
};