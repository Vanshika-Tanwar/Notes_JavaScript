// Module
/* import playGuitar from "./guitar.js";
import { shredding as shred, plucking } from "./guitar.js";
 */
import * as Guitars from "./guitar.js";
import User from "./user.js";
const me = new User("email@email.com", "Dave");
console.log(me);
console.log(me.greeting());
console.log(Guitar.default());
console.log(Guitar.shredding());
console.log(Guitar.plucking());
