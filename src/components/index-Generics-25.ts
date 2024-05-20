//--------------
// Generics 101
//--------------

function logAndReturnString(val: string): string {
  console.log(val);
  return val;
}
function logAndReturnNumber(val: number): number {
  console.log(val);
  return val;
}
function logAndReturnBoolean(val: boolean): boolean {
  console.log(val);
  return val;
}

function logAndReturnValue<T>(val: T): T {
  console.log(val);
  return val;
}

// const result = logAndReturnNumber(5);
// console.log(result);

const resultTwo = logAndReturnValue<string>("Hello");
const resultOne = logAndReturnValue<number>(23);

function getRandomValue<T>(val: T[]): T {
  const index = Math.floor(Math.random() % val.length);
  return val[index];
}

interface User {
  name: string;
  score: number;
}

const users: User[] = [
  { name: "mario", score: 100 },
  { name: "peach", score: 150 },
  { name: "wario", score: 75 },
  { name: "yoshi", score: 90 },
];

const randomUser = getRandomValue<User>(users);
console.log(randomUser);

// console.log(result);

/* 
function logAndReturnValue<T>(val: T): T {
  console.log(val);
  return val;
}

const resultOne = logAndReturnValue<string>("mario");
const resultTwo = logAndReturnValue<number>(25);

// example 2

function getRandomArrayValue<T>(values: T[]): T {
  const i = Math.floor(Math.random() * values.length);

  return values[i];
}

interface User {
  name: string;
  score: number;
}

const users: User[] = [
  { name: "mario", score: 100 },
  { name: "peach", score: 150 },
  { name: "wario", score: 75 },
  { name: "yoshi", score: 90 },
];

const randomUser = getRandomArrayValue<User>(users);
console.log(randomUser.name);
 */
