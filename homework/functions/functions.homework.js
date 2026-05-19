/*
* Complete the following:
* 
* 1. Create a function that takes two parameters and logs them to the console
*    - show this function works by calling it
* 2. Create a function that takes in one parameter of type number and returns the doubled result
*    - show this function works by calling the function and logging the result
*/

// Begin writing your code below
function pets(pet1,pet2) {
    console.log(pet1, pet2)
}
pets('Dogs','Cats')
function doublepets(petcount) {
    return petcount * 2 
}
console.log(doublepets(2))
console.log(doublepets(3))