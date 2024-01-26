// Javascript Classes
/* 
class Pizza{
  constructor(pizzaType,pizzaSize){
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
  }
  getCrust(){ // get pizzaCrust made it a method
    return this.crust;
  }
  setCrust(pizzaCrust){ //set pizzaCrust made it a method
    this.crust = pizzaCrust;
  }
  getToppings(){
    return this.toppings;
  }
  setToppings(topping){
    this.toppings.push(topping);
  }
  bake(){
    console.log(`Baking a ${this.size} ${this.crust} crust ${this.type} Pizza.`);
  }
}

const myPizza = new Pizza("Pepperoni","medium");
myPizza.type = "supreme";
myPizza.setToppings("sausages");
myPizza.setToppings("olives");
myPizza.setCrust("thin"); // a function method 
myPizza.bake();  //or myPizza.pizzaCrust = "thin";
*/
/*
// for simplifying class

//a basic Pizza class [Parent Class/super Class]
class Pizza{
  constructor(pizzaSize){
    this.size = pizzaSize; //this._size convention for private properties.
    this.crust = "original";
  }
  getCrust(){ // get pizzaCrust made it a method
    return this.crust;
  }
  setCrust(pizzaCrust){ //set pizzaCrust made it a method
    this.crust = pizzaCrust;
  }
}

class SpecialtyPizza extends Pizza {
  constructor(pizzaSize){
    super(pizzaSize);
    this.type = "The Works";
  }
  slice(){
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
  }
}

const mySpeaciality = new SpecialtyPizza("Medium");
mySpeaciality.slice(); */

// Factory Function

function pizzaFactory(pizzaSize){
  const crust = "original";
  const size = pizzaSize;
  return{
    bake: () => console.log(`Baking a ${size} ${crust} pizza.`)
  };
}
const myPizza = pizzaFactory("small");
myPizza.bake();