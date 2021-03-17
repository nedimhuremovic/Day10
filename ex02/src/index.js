// Only change code below this line
    var myClothes = {
        hat: "Fedora",
        shirt: "Nike",
        shoes: "Converse"
    }
    function myFunction(myObj) {
        noviObj = {
        hatValue: myClothes.hat,
        shirtValue: myClothes.shirt,
        shoesValue: myClothes.shoes
        }
        return noviObj;
    }
// Only change code above this line
console.log(myFunction(myClothes)); // Change this line
module.exports = myFunction(myClothes);