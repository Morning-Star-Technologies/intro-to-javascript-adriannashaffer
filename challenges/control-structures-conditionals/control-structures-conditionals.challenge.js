/**
* Using a common theme (pick whatever you like) create the following:
*
* 1. An if/else statement that evaluates to true using a boolean AND
*    comparison operator and logs a message to the console.
* 2. A switch statement with at least 3 cases and a default case that
*    logs a message to the console for each case.
*/

let character = 'Garfield';
let hatesMondays = true;
let lovesLasagna = true;

if (character === 'Garfield' && lovesLasagna === true) 
  console.log('Garfield is happily eating lasagna');
else 
  console.log("This character is not Garfield or doesn't like lasagna.");

let day = 'Monday';

switch (day) 
{case 'Monday':
    console.log('Garfield hates Mondays!');
    break;
  case 'Tuesday':
    console.log('Garfield is still grumpy.');
    break;
  case 'Friday':
    console.log('Garfield is ready to relax!');
    break;
  default:
    console.log('Garfield is just being lazy.')}