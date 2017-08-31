'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// The frist columns should be automatically as wide as the longest key

var ingredients = [
	{ 'vodka': 1, 'needs_cooling': true },
	{ 'coffee_liqueur': 0, 'needs_cooling': true },
	{ 'fresh_cream': 1, 'needs_cooling': true },
	{ 'captain_morgan_rum': 2, 'needs_cooling': true },
	{ 'mint_leaves': 0, 'needs_cooling': false },
	{ 'sugar': 100, 'needs_cooling': false },
	{ 'lime juice': 10, 'needs_cooling': true },
	{ 'soda': 100, 'needs_cooling': true }
]

function print (list) {
  var plus = "+";
  var mi = "-";
  var space = " ";
  var vertical = "| "
  
  var maxLength = 0;
  list.forEach(function(item) {
    if (Object.keys(item)[0].length > maxLength) {
      maxLength = Object.keys(item)[0].length;
    }
  });

  var firstLine = plus + mi.repeat(maxLength + 2) + plus + "---------------+----------+";
  var head = vertical + "Ingredient" + space.repeat(maxLength - 9) + "| Needs cooling | In stock |";
  //print the first 3 lines
  console.log(firstLine);
  console.log(head);
  console.log(firstLine);

  //print the content
  var name = "";
  var needsCooling = "";
  var inStock = "";
  list.forEach(function(item) {
    name = Object.keys(item)[0];
    needsCooling = item.needs_cooling ? "| Yes           " : "| No            ";
    inStock = item[Object.keys(item)[0]] > 0 ? item[Object.keys(item)[0]] : "-";
    console.log(vertical + name + space.repeat(maxLength - name.length + 1) + needsCooling + vertical + inStock + space.repeat(8 - inStock.toString().length) + " |");
  });

  //print the last line
  console.log(firstLine);
}

print(ingredients);