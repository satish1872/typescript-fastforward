/* lecture 2  */
//------------------------
// basic type annotations
//------------------------

let age: number = 30;
let age1: number = 31;
let firstName: string = "Mario";
let isFictional: boolean;

// age = 'hello'
age = 31;

// firstName = 100
firstName = "Luigi";

// isFictional = 'false'
isFictional = false;

//----------------
// type inference
//----------------

let planet = "Earth";
let moons = 1;
let isLarge = false;

// planet = 10
planet = "Saturn";

// moons = '145'
moons = 145;

// isLarge = 'yes'
isLarge = true;

//------------------
// null & undefined
//------------------

let something: null;
let anotherThing: undefined;

// something = 10
something = null;

// anotherThing = 'hello, world'
// anotherThing = undefined

console.log(isLarge);
console.log(moons);
// console.log(moons);
