var sucet = function() {
    var num1 = +prompt("Give me one number"); // plus zmeni string na cislo
    var num2 = +prompt("Give me one more number");
    console.log(num1 + num2);
}

var evenOrOdd = function() {
    var num1 = +prompt("Give me one number"); // plus zmeni string na cislo
    var num2 = +prompt("Give me one more number");
    var sum = num1 + num2;
    if ( sum % 2 === 1 ) {
        console.log("The sum is odd.")
    } else {
        console.log("The sum is even.")
    }
}

evenOrOdd();




