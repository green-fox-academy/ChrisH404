'use strict';

const FIRSTPAGE = 1;
const LASTPAGE = 214;
var urlObj = {
  'url': 'https://www.anapioficeandfire.com/api/characters?',
  'page': 1,
  'pageSize': 10
}
function getUrl(page) {
  if (page <= 0) {
    urlObj.page = FIRSTPAGE;
  }else if (page > LASTPAGE) {
    urlObj.page = LASTPAGE;
  }else {
    urlObj.page = page;
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
var tablerowList = document.querySelectorAll('tr');

function sendRequest(page) {
  return function() {
    http.open('GET', getUrl(page));
    http.send();
    http.onreadystatechange = getResult;
  }
}

function getResult() {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200){
    var data = JSON.parse(http.response);
    data.forEach(function(character, index) {
      tablerowList[index + 1].cells[0].textContent = character.name;
      tablerowList[index + 1].cells[1].textContent = character.gender;
      tablerowList[index + 1].cells[2].textContent = character.culture;
      tablerowList[index + 1].cells[3].textContent = character.url;
    });
  }
}

buttonObj.first.addEventListener('click', sendRequest(FIRSTPAGE));
buttonObj.last.addEventListener('click', sendRequest(LASTPAGE));
buttonObj.previous.addEventListener('click', sendRequest(urlObj.page - 1));
buttonObj.next.addEventListener('click', sendRequest(urlObj.page + 1));

