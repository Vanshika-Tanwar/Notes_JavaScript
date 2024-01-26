// FIRST CODING CHALLENGE IN JAVASCRIPT

// Write code that will return a random letter from your name.

const myName = "VANSHIKA";
const len = (myName.length) - 1;
const myNum = Math.floor(Math.random() * len + 1);
console.log(myName.charAt(myNum));
