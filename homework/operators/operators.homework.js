/*
* Using a common theme (pick whatever you like) demonstrate two of the
* following categories of operators:
*
* - Arithmetic Operators (+, -, *, /)
* - Comparison Operators (===, !==, >, <, >=, <=)
* - Logical Operators (&&, ||, !)
* - String Operator (+)
*
* You will need to create variables to hold values and then log some
* sort of output to the console that demonstrates the use of these operators.
*
* Example:
*    let peasantHealth = 50;
*    const wolfDamage = 20;
*    peasantHealth = peasantHealth - wolfDamage;
*    console.log('The peasant has', peasantHealth, 'health left after the wolf attack.');
*/

// Begin writing your code below
let granerylevel = 50;

console.log('Current granery level is at',granerylevel);

let famine = 20;

 granerylevel = granerylevel - famine;

 console.log('A famine has entered the land! Your granery levels have lowered to',granerylevel)
let endoffamine = 60;

granerylevel = granerylevel + endoffamine;

console.log('the famine has ended and we have produced more food for our granary! Graner levels are now at',granerylevel)
 
let population = 90;

console.log('The population has increased! Is there enough food for them in the granery?',granerylevel>population)