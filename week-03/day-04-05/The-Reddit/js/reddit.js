'use strict';

const API = 'https://time-radish.glitch.me/posts';
const http = new XMLHttpRequest();
const tableBody = document.querySelector('tbody');

getPosts();

function getPosts() {
  http.open('GET', API);
  http.send();
  http.onreadystatechange = setPosts;
}

function setPosts() {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200){
    var posts = JSON.parse(http.response).posts;
    posts.forEach(generateTableRow);
    setVote('upvote');
    setVote('downvote');
    setRemove();
  }
}

function generateTableRow(post) {
  var id = post.id;
  var tr = document.createElement('tr');
  tr.id = id;
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  td1.textContent = id;
  td1.classList.add('center');
  td2 = setPoint(td2,post);
  td3 = setMainContent(td3,post);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tableBody.appendChild(tr);
}

function setPoint(td,post) {
  var upvote = document.createElement('div');
  var point = document.createElement('div');
  var downvote = document.createElement('div');
  point.textContent = post.score;
  point.classList.add('center');
  upvote.classList.add('upvote');
  upvote.setAttribute('data',post.id);
  downvote.classList.add('downvote');
  downvote.setAttribute('data',post.id);
  td.appendChild(upvote);
  td.appendChild(point);
  td.appendChild(downvote);
  return td;
}

function setMainContent(td, post) {
  td.innerHTML = "";
  var link = document.createElement('a');
  link.href = post.href;
  link.textContent = post.title;
  td.appendChild(link);
  var submit = document.createElement('div');
  var author = post.owner ? post.owner : "anonymous";
  var submitTime = getSubmitTime(post.timestamp);
  submit.textContent = "Submitted " + submitTime + " ago by " + author;
  submit.classList.add('small-text');
  var remove = document.createElement('button');
  remove.setAttribute('data',post.id);
  remove.textContent = "remove";
  td.appendChild(submit);
  td.appendChild(remove);
  return td;
}

function getSubmitTime(timestamp) {
  var result = "";
  var currentTime = new Date();
  var time = new Date(timestamp);
  var timeDiffer = currentTime.getTime() - time.getTime();
  var year = Math.floor(timeDiffer/(1000 * 3600 * 24 * 365));
  if (year) {
    result = result + year + " years ";
  }
  var afterYear = timeDiffer % (1000 * 3600 * 24 * 365);
  var month = Math.floor( afterYear / (1000 * 3600 * 24 * 30) );
  if (month) {
    result = result + month + " months ";
  }
  var afterMonth = afterYear % (1000 * 3600 * 24 * 30);
  var day = Math.floor(afterMonth / (1000 * 3600 * 24));
  if (day) {
    result = result + day + " days ";
  }
  var afterDay = afterMonth % (1000 * 3600 * 24);
  var hour = Math.floor(afterDay / (1000 * 3600));
  if (hour) {
    result = result + hour + " hours ";
  }
  var afterHour = afterDay % (1000 * 3600);
  var minute = Math.floor(afterHour / (1000 * 60));
  if (minute) {
    result = result + minute + " minutes ";
  }
  var afterMinute = afterHour % (1000 * 60);
  var second = Math.floor(afterMinute / 1000);
  if (second) {
    result = result + second + " seconds ";
  }
  return result;
}

function setVote(vote) {
  var voteButtonList = document.querySelectorAll('.' + vote);
  Array.from(voteButtonList).forEach(function(item) {
    item.addEventListener('click', voteForPost(item,vote));
  });
}

function voteForPost(item,vote) {
  return function doTheVote() {
    var id = item.getAttribute('data');
    var url = API + "/" + id + "/" + vote;
    http.open("PUT", url);
    http.send();
    http.onreadystatechange = updatePost(vote);
    item.removeEventListener('click', doTheVote);
  }
}


function updatePost(vote){
  return function() {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200){
      var updatedPost = JSON.parse(http.response);
      updateTableRow(updatedPost,vote);
    }
  }
}

function updateTableRow(post, vote) {
  var id = post.id;
  var tr = document.getElementById(id);
  if (vote === "upvote") {
    tr.childNodes[1].firstChild.classList.add(vote + 'd');
    tr.childNodes[1].firstChild.removeEventListener('click',voteForPost(post,vote));
    console.log(tr.childNodes[1].firstChild);
  } else {
    tr.childNodes[1].lastChild.classList.add(vote + 'd');
  }
  tr.childNodes[1].childNodes[1].textContent = post.score;
}

function setRemove() {
  var removeButtonList = document.querySelectorAll('button');
  Array.from(removeButtonList).forEach(function(item) {
    item.addEventListener('click', removePost(item));
  });
}

function removePost(item) {
  return function() {
    var id = item.getAttribute('data');
    var url = API + "/" + id;
    http.open("DELETE", url);
    http.send();
    http.onreadystatechange = deletePost;
  }
}

function deletePost() {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200){
    var removePostResponse = JSON.parse(http.response);
    var tr = document.getElementById(removePostResponse.id);
    tr.innerHTML = "";
  }
}