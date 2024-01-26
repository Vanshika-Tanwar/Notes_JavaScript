//Objects => {key:value} pairs in curly braces
const myObj = {name:"David"};
const anotherObj = {
  alive: true, answer : 42 , hobbies :["hat","sleep","Code"] ,
  beverage : {
    morning: "Coffee" , afternoon : "Iced Tea"
  } ,
  action : function(){
    return `Time for ${this.beverage.morning}`;
  }
}
console.log(myObj.name);
console.log(myObj);
console.log(anotherObj.hobbies[1]);
//alternative
console.log(anotherObj["alive"]);

//function inside objects

console.log(anotherObj.action());

// Creating obj from generic obj

const vehicle = {
  wheels : 4,
  engine : function(){
    return "Vroom!";
  }
}
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck); // only doors : 2 reflected But
console.log(truck.wheels); // Inheritance can access the value taken from vehicle
console.log(truck.engine());
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {
  return "Whoosh!";
}
console.log(car.engine());

const Tesla = Object.create(car);
Tesla.engine = function() {
  return "Shh...";
}
console.log(Tesla.engine());

console.log(Object.keys(Tesla));

const band = {
  vocals : "Robert" ,
  guitarist : "Charles" ,
  bass : "Patrick",
  drum : "John"
};

console.log(Object.keys(band));
console.log(Object.values(band));

//Different for loop for Object

// The for in loop

for (let job in band){
  console.log(`On ${job}, It's ${band[job]} `);
}

//delete property
delete band.drum;
//check properties
console.log(band.hasOwnProperty("drums"));

// Destructuring Object
const {guitarist : myGuitar, bass : myBass} = band;
console.log(myBass + " " + myGuitar);

//even use the same name as key for variable
const {guitarist, bass} = band;
console.log(guitarist + " " + bass);

// into a function
function sings({ vocals }) {
  return `${vocals} sings!`;
}
console.log(sings(band));