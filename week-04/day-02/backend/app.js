'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

var jsonParser = bodyParser.json();

app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', function(req, res) {
  var input = req.query.input;
  var obj;
  if (input) {
    obj = {
      "received": parseInt(input),
      "result": parseInt(input) * 2
    }
  }else {
    obj = {
      "error": "Please provide an input!"
    }
  }
  res.send(obj);
});

app.get('/greeter', function(req, res) {
  var name = req.query.name;
  var title = req.query.title;
  var obj;
  if (name && title) {
    obj = {
      "welcome_message": "Oh, hi there " + name + ", my dear "+ title +"!"
    };
  }else if (!name){
    obj = {
      "error": "Please provide a name!"
    };
  }else {
    obj = {
      "error": "Please provide a title!"
    };
  }
  res.send(obj);
})

app.get('/appenda/:appendable', function(req, res) {
  var appendable = req.params.appendable;
  var obj = {
    "appended": appendable + 'a'
  }
  res.send(obj);
});

app.post('/dountil/:what', jsonParser, function(req, res) {
  var until = req.body.until;
  var what = req.params.what;
  var obj;
  if (!until) {
    obj = {
      "error": "Please provide a number!"
    };
  }
  if (what === 'sum') {
    obj = {
      "result": sumUntil(until)
    }
  }else if (what === 'factor') {
    obj = {
      "result": multiplyUntil(until)
    }
  }
  res.send(obj);
});

app.post('/arrays', jsonParser, function(req, res) {
  var what = req.body.what;
  var numbers = req.body.numbers;
  var obj = {
    "error": "Please provide what to do with the numbers!"
  }
  if (!numbers || !what) {
    return res.send(obj);
  }
  if (what === 'sum') {
    obj = {
      'result': sumArray(numbers)
    }
  }else if (what === 'multiply') {
    obj = {
      'result': multiplyArray(numbers)
    }
  }else if (what === 'double') {
    obj = {
      'result': doubleArray(numbers)
    }
  }else {
    obj = {
      "error": "Please provide what to do correctly!"
    }
  }
  res.send(obj);
})

app.post('/sith', jsonParser, function(req, res) {
  var text = req.body.text;
  var obj = {
    "error": "Feed me some text you have to, padawan young you are. Hmmm."
  }
  if(!text) {
    return res.send(obj);
  }
  var sithText = sith(text);
})

function sumUntil(until) {
  var sum = 0;
  for (var i = 1; i <= until; i++) {
    sum += i;
  }
  return sum;
}

function multiplyUntil(until) {
  var factor = 1;
  for(var i = 1; i <= until; i++) {
    factor *= i;
  }
  return factor;
}

function sumArray(array) {
  var sum = 0;
  array.forEach(function(item) {
    sum += item;
  });
  return sum;
}

function multiplyArray(array) {
  var result = 1;
  array.forEach(function(item) {
    result *= item;
  });
  return result;
}

function doubleArray(array) {
  var newArray = array.map(function(item) {
    return item * 2;
  });
  return newArray;
}

function sith(str) {
  var arr = str.split(" ");
}

app.listen(port);