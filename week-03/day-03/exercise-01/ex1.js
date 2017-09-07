'use strict';

const HOST = 'http://api.giphy.com/v1/gifs/search';
const API_KEY = 'addb6aae496c406ca19185bb2937cb82';
const LIMIT = 16;

var url = HOST + "?api_key=" + API_KEY;
const http = new XMLHttpRequest();

var imgList = document.getElementsByTagName('img');
var searchKey = document.querySelector('#search-key');
var searchButton = document.querySelector('button');

searchButton.addEventListener('click', function() {
  url = url + "&q=" + searchKey.value + "&limit="+ LIMIT;
  http.open('GET', url);
  http.send();
  http.onreadystatechange = setResult;
});

function setResult() {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
    var dataList = JSON.parse(http.response).data;
    dataList.forEach(function(data, index) {
      var img = imgList[index]
      var stillImg = data.images.fixed_width_still;
      var gifImg = data.images.fixed_width
      var isGif = false;
      setGif(img);
      img.addEventListener('click', resetGif);
      img.addEventListener('mouseover', resetGif);
      img.addEventListener('mouseout', resetGif);
      function setGif(img) {
        if (isGif) {
          img.src = gifImg.url;
          img.height = gifImg.height;
          img.width = gifImg.width;
        }else {
          img.src = stillImg.url;
          img.height = stillImg.height;
          img.width = stillImg.width;
        }
      }
      function resetGif () {
          isGif = !isGif;
          setGif(event.target);
      }
    });
  }
}
