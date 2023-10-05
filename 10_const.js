// Declare a Read-Only Variable with the const Keyword
const FAV_PET = "Cats";
FAV_PET = "Dogs"; /* this show error  Uncaught TypeError: Assignment to constant variable.
at < anonymous >: 2: 9 */

/* 
Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices. Do not change the strings assigned to the variables.
*/

const FCC = "freeCodeCamp"; //const - make variable uppercase
let fact = "is cool!"; // let when you want to change it
fact = "is awesome!";
console.log(FCC, fact);
