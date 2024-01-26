/*
let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean); */

let name = prompt("Please enter your name.");
//console.log(name ?? "You didn't enter your name." );
if (name){
  console.log(name.length);
  console.log(name.trim().length);
  console.log(name.trim()); //returns null if cancelled
}
else{
  console.log("You didn't enter your name.")
}