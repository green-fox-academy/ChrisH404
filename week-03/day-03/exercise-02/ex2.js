'use strict';

const FIRSTPAGE = 1;
const LASTPAGE = 214;
var urlObj = {
  'url': 'https://www.anapioficeandfire.com/api/characters?',
  'page': 1,
  'pageSize': 10
}
function getUrl() {
  if (urlObj.page <= 0) {
    urlObj.page = FIRSTPAGE;
  }else if (urlObj.page > LASTPAGE) {
    urlObj.page = LASTPAGE;
  }
  return urlObj.url + "page=" + urlObj.page + "&pageSize=" + urlObj.pageSize;
}

const http = new XMLHttpRequest();

var buttonObj = {
  'previous': document.querySelector('#Previous'),
  'next': document.querySelector('#Next'),
  'first': document.querySelector('#First'),
  'last': document.querySelector('#Last')
}
var talbeBody = document.querySelector('tbody');

function sendRequest(page) {
  return function() {
    urlObj.page += page;
    http.open('GET', getUrl());
    http.send();
    http.onreadystatechange = getResult;
  }
}

function getResult() {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200){
    var data = JSON.parse(http.response);
    talbeBody.innerHTML = "";
    data.forEach(function(character, index) {
      var tr = document.createElement('tr');
      var td1 = document.createElement('td');
      td1.textContent = character.name;
      var td2 = document.createElement('td');
      td2.textContent = character.gender;
      var td3 = document.createElement('td');
      td3.textContent = character.culture;
      var td4 = document.createElement('td');
      td4.textContent = character.url;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      talbeBody.appendChild(tr);
    });
  }
}

buttonObj.first.addEventListener('click', sendRequest(-LASTPAGE));
buttonObj.last.addEventListener('click', sendRequest(LASTPAGE));
buttonObj.previous.addEventListener('click', sendRequest(-1));
buttonObj.next.addEventListener('click', sendRequest(1));

