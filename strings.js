// Strings
const myVariable = "Mathematic";


// The Length Property
console.log("Vicco".length);


// String Methods
  // charAt() displays the specific character at the provided index number.
console.log(myVariable.charAt(0));

  // indexOf() finds position of first occurence of element(s) we're looking for
console.log(myVariable.indexOf("mat"));
console.log(myVariable.indexOf("at"));
console.log(myVariable.indexOf("e"));

  // lastIndexOf() similar and as the name suggests does so.
console.log(myVariable.slice(5,8)); // ending post parameter NOT INCLUDED.
console.log(myVariable.slice(5)); //if not given works till the last.

  // toUpperCase() & toLowerCase() transform into what their names suggest

  // include() gives a boolean output as it checks inclusivity
console.log(myVariable.includes("sun"));
console.log(myVariable.includes("math"));
console.log(myVariable.includes("mat"));

  // split() splits the string wherever the element provided occurs and outputs an array with resulting strings.
console.log(myVariable.split("e"));
console.log(myVariable.split("M")); // can be used to distinct list elements.
console.log(myVariable.split(""));  // can be used to distinct words in a sentence.

