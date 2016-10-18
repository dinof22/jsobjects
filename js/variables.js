//this below is a variable. the IDENTIFIER piggies refers to the VALUE of 3 which is BOUND to the identifier
var piggies = 3

//the identifier can be stored separately from the data it represents. becuase of this the value of the variable can change during the execution of the code.
console.log(piggies);

piggies += 22;

console.log(piggies);

//unlike in mathematics, variables in computer programming are generally given longer names to describe their use, instead of using single characters. 

//variables in programming can be used and referenced multiple times. referring to the repeated use of statements, one might refer to it as ITTERATION.

for(piggies = 0; piggies < 5; piggies++) {
    console.log(piggies + " piggies");
};

//A SUBROUTINE (referred to in some languages and a function) is a certain block of code that is grouped together, and is used and reused to perform a specific task.

function priceMachine(quantity, price) {
    console.log("total price is " + (quantity * price) + " dollars");
}

priceMachine(4, 50.00);
