// Only change code below this line
var myFood = {
  vegetable: "carrot",
  fruit: "orange",
  drink: "water",
};
function myFunction(myObj) {
  var noviObj = {
    vegetableValue: myObj["vegetable"],
    fruitValue: myObj["fruit"],
    drinkValue: myObj["drink"],
  };
  return noviObj;
}
// Only change code above this line
console.log(myFunction(myFood)); // Change this line
module.exports = myFunction(myFood);
