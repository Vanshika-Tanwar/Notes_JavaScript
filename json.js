//JSON: JavaScript Object Notation
/*
used to send and recieve data usually from servers to webpgs
is a text format, completely language independent
*/
const myObj = {
  name : "David" ,
  hobbies : ["eat", "sleep", "code"], 
  hello : function(){
    console.log("hello!");
  }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);

const recieveJSON = JSON.parse(sendJSON);
console.log(recieveJSON);