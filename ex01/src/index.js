var myPet = {
    species : "Dog",
    name : "Max",
    legs : 4,
    friends : ["Rex", "Jack"]
};
function  myFunction(myObj) {
    return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };