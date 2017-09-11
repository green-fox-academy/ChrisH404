'use strict';

const API = 'https://time-radish.glitch.me/posts';
const http = new XMLHttpRequest();

var submitButton = document.querySelector('button');
submitButton.addEventListener('click',postNewPost);

function postNewPost() {
  var href = document.querySelector('#href').value;
  var title = document.querySelector('#title').value;
  var body = {
    "title": title,
    "href": href
  };
  http.open('POST',API);
  http.setRequestHeader('Accept', 'application/json');
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(JSON.stringify(body));
  http.onreadystatechange = function() {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200){
      alert("New post created successfully!");
    }
  }
}