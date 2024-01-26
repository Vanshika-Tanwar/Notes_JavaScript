// Numbers shown as blue/purple but strings are white.

  // An integer is a whole number.
const myNumber = 54;
  // A number with decimal point is a float which refrences the floating point.
const myFloat = 54.174; 
const myFloat2 = 54.0; 

const myString= "54";
const myString2 = "34ifj"

  // Comparisions
console.log(myNumber === myFloat);
console.log(myNumber === myFloat2); //returns true as value is/if same.
console.log(myNumber === myString); // false, different datatypes

console.log(myString + 3);
  //Number() to convert into Number datatype.
console.log(Number(myString) + 3);

console.log(myNumber === Number(myString));
  // on elements/strings that are NOT Number.
console.log(Number("David")); // NaN = Not a Number
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1

  // NUMBER METHODS

  // Number.isInteger(num/arg);

console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myFloat));

  //Number.parseFloat()/parseInt() method parses an arg and returns a float point num. If a num cant be parsed, retrns NaN

console.log(Number.parseFloat(myNumber));
console.log(Number.parseFloat("abcd"));
console.log(Number.parseInt(myFloat));
console.log(Number.parseFloat(myString2)); //keeps only first occ of number(s), removes char, if idf34 gives NaN if 3f4 gives 3

  // toFixed() method formats a number acc to how many decimal points provided as parameter.
console.log(Number.parseFloat(myString2).toFixed(2));
console.log(myFloat.toFixed(2)); //also rounds up
console.log(myFloat.toFixed(3)); //outputs string not numbers
console.log(myFloat.toFixed(1));
console.log(myFloat.toFixed(0));
console.log(myFloat.toFixed(4));

  // toString()
console.log(myFloat.toString());

  // Number.isNaN() if the value passed is NaN and its type is a number
console.log(Number.isNaN("David"));

  // The global isNan() Function whether a val is NaN or not
console.log(isNan("DAVID"));