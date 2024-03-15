//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

//equality and inequality by lower case function
let myName ="Nida";
console.log(myName == "Nida");
console.log(myName !== "nida");

//
let myNumber =10;
console.log(myNumber ==10);
console.log(myNumber !==10);
console.log(myNumber > 5);      // true  greater than
console.log(myNumber < 5 );    //false less than
console.log(myNumber <= 5);    //false less than equal to
console.log(myNumber >= 5);    //true   greater than or equalto

//and &&  ===== or ||
let num1 =10;
let num2 =5;

console.log(num1 > 9 && num2 < 5);

console.log(num1 > 9 || num2  < 5);

//arry 

let myArry =[2 , 3 , "Nida"];

//not arry

let myString = "Sikander"

console.log(Array.isArray(myArry));

console.log(myString)


