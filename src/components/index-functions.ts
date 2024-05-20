/* array  */

let names: string[] = ["mario", "harry", "peach"];

let ages: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// names.push(true);
names.push("super");
ages.push(48);

var myName = names[2];

let fruits = [
  "apple",
  "orange",
  "orange",
  "orange",
  "orange",
  "orange",
  "orange",
  "orange",
  "orange",
];

const f = fruits[3];

let things = [f, 23, true];

let t = things[1];

/* object and  literal */

let user: { firstname: string; age: number; id: number };
user = {
  firstname: "John",
  age: 40,
  id: 123,
};

user.firstname = "Harry";

let person = {
  name: "luije",
  score: 35,
};

person.name = "bowser";
person.score = 24;

const score = person.score;

/* 
functions
*/

function add2Numbers(a: number, b: number): number {
  return a + b;
}

add2Numbers(24, 12);

const substract = (a: number, b: number): number => {
  return a - b;
};

add2Numbers(3, 9);
substract(10, 3);

function addNumbers(items: number[]) {
  const total = items.reduce((prevValue, curr) => prevValue + curr, 0);
  console.log("total: " + total);
}

console.log("hello world!");
addNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

/* reuturn type inferenfe */

function formatGretting(greeting: string, name: string) {
  return `${greeting},${name}`;
  // return 10;
}

console.log(formatGretting("hello", "John"));
