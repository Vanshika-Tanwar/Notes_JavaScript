/* usual way
function getUserName(email){
    return email.slice(0,email.indexOf("@"));
}
//main
let email = prompt("Enter your email.");
let userName = getUserName(email);
alert(`Your username is: ${userName}`); */

/* variable method
const getUserName = function (email){
    return email.slice(0,email.indexOf("@"));
}
//main
let email = prompt("Enter your email.");
let userName = getUserName(email);
alert(`Your username is: ${userName}`);*/

/* arrow functions

const getUserName = (email) => {
    return email.slice(0,email.indexOf("@"));
}
//main
let email = prompt("Enter your email.");
let userName = getUserName(email);
alert(`Your username is: ${userName}`); */

// Practice
 
const toProperCase = (word) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

let word = prompt("Enter a word");
word= toProperCase(word);
alert(`Your name is: ${word}`);
