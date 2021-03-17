// Create lion object here
    var lion = {
        name: "Simba",
        legs: 4,
        tails: 1
    };
// End of lion object

function myFunction(prop,propValue) {
// Only change code below this line
    lion[prop] = propValue;
    return lion;
// Only change code above this line
}
console.log(myFunction("roar","roar-roar")); // Change this line
module.exports = myFunction;