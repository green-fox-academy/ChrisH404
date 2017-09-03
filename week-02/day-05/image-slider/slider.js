var imgs = [
  {
    src: 'images/Mufc.jpg',
    title: 'Manchester United',
    description: 'My favorite football club in the world!'
  },
  {
    src: 'images/Lake.jpg',
    title: 'Lake',
    description: 'Do you know which lake is this? I don\'t know either!'
  },
  {
    src: 'images/Shapes.jpg',
    title: 'Shapes',
    description: 'Shape shape shape shape...'
  },
  {
    src: 'images/Pink Lotus Flower.jpg',
    title: 'Pink Lotus Flower',
    description: 'Why don\'t I use white lotus flower? Cause I don\'t have!'
  },
  {
    src: 'images/Red Bells.jpg',
    title: 'Red Bells',
    description: 'This kind of flower is called red bells, because it look like red bells...Oh,insignificant words!'
  },
  {
    src: 'images/Beach.jpg',
    title: 'Beach',
    description: 'If you want to say sunny beach, don\'t do it like sun of beach...'
  }
]

// set the first picture as default
var imgNum = imgs.length;
var slide = document.querySelector('.slide img');
var title = document.querySelector('.description h1');
var description = document.querySelector('.description p');
var current = 0;
slide.setAttribute('src', imgs[current].src);
title.textContent = imgs[current].title;
description.textContent = imgs[current].description;

// generate thumbnails
imgs.forEach(function(item) {
  var newImg = document.createElement('img');
  newImg.setAttribute('src', item.src);
  newImg.classList.add('small_img');
  newImg.setAttribute('title',item.title);
  var thumbnailsDiv = document.querySelector('.thumbnails');
  thumbnailsDiv.appendChild(newImg);
});
var thumbnailsImg = document.querySelectorAll('.thumbnails img');
thumbnailsImg[current].classList.add("selected");

// draw current mark of thumbnails and big image
function currentImg () {
  slide.setAttribute('src', imgs[current].src);
  title.textContent = imgs[current].title;
  description.textContent = imgs[current].description;
  for (var i = 0; i < imgNum; i++) {
    if (i === current) {
      thumbnailsImg[current].classList.add("selected");
    }else {
      thumbnailsImg[i].classList.remove("selected");
    }
  }
  console.log(current);  
}

// right arrow function
function right_img() {
  var src = slide.getAttribute('src');
  imgs.forEach(function(item,index) {
    if (item.src === src) {
      current = index;
    }
  });
  if (current === imgNum - 1) {
    current = 0;
  } else {
    current++;
  }
  currentImg();
}

// left arrow function
function left_img() {
  var src = slide.getAttribute('src');
  imgs.forEach(function(item,index) {
    if (item.src === src) {
      current = index;
    }
  });
  if (current === 0) {
    current = imgNum - 1; 
  } else {
    current--;
  }
  currentImg();
}

// thumbnails onclick function 
function thumb_navi(index) {
  current = index;
  currentImg();
}

// add arrow function
var rightButton = document.querySelector('.right_arrow');
var leftButton = document.querySelector('.left_arrow');
rightButton.addEventListener('click',right_img);
leftButton.addEventListener('click',left_img);


// add thumbnails onclick function
var thumbnails = Array.from(thumbnailsImg);
thumbnails.forEach(function(item, index) {
  item.addEventListener('click',function(){thumb_navi(index);});
});