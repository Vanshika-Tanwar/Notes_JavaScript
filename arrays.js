const myArray = [];
// adding element in empty array
myArray[0]="dave";
myArray[1]=100;
myArray[2]=true;

console.log(myArray);
console.log(myArray.length);

//last element

console.log(myArray[myArray.length-1]);

//adding last element
myArray.push("school",70);
console.log(myArray);

//removing last element

console.log(myArray.pop() +"\n" + myArray);

//adding front element

myArray.unshift(42, "hello");
console.log(myArray);

// newLength

let newLength = myArray.pop();
console.log(newLength); //gives the element
newLength = myArray.unshift(20,11);
console.log(newLength); //give new length
newLength = myArray.push(12);
console.log(newLength); //give new length
newLength = myArray.shift(); //front pop
console.log(newLength + "\n" + myArray);

delete myArray[2];
console.log(myArray);
console.log(myArray[2]);

myArray.splice(0,3);
console.log(myArray);

//replacing by splice

myArray.splice(1,1,"hello");
console.log(myArray);
myArray.splice(1,0,"oh this");
console.log(myArray);

//slice()
const newArray= myArray.slice(0,2);
console.log(newArray);

//reverse() method
newArray.reverse();
console.log(newArray);

//join() method
  //split() method its a String method
const newString = newArray.join();
console.log(newString);

const newArray2 = newString.split(",");
newArray2.push(34);
console.log(newArray2);

//concat()
const myArrayA= ["A","B","C"];
const myArrayB= ["D","E","F"];
//const newArray3 = myArrayA.concat(myArrayB);
// spread operator different than [A1,A2];
const newArray3 = [...myArrayA , ...myArrayB];
console.log(newArray3); 

//nested Arrays
  // 2D Array

const equipShelfA = ["football", "baseball", "basketball"];
const equipShelfB = ["tennis balls", "golf balls", "volleyball"];

const clothShelfA = ["sweatshirt","tank top","crop top"];
const clothShelfB = ["hoodies","jerseys","T-shirt"];

const equipDept = [equipShelfA,equipShelfB];
const clothDept = [clothShelfA,clothShelfB];

console.log(equipDept[0][0]+"\n"+clothDept[1][1]);

  // 3D Array
const sportsRoom = [equipDept,clothDept];
console.log(sportsRoom[0][1][2]);



