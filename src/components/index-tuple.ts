let age: any;
age = 32;

age = true;

let things: any[] = [12, "13", true, 123, 45];

things.push(undefined);
things.push({ id: Math.random() % 1000 });

function addTogether(value: any): any {
  return value + value;
}

const result1 = addTogether("hello");

const result2 = addTogether(2);

/* tuple */

let person: [string, number, boolean] = ["john", 12, true];

let hsla: [number, string, string, number];
hsla = [200, "100%", "50%", 1];

let xy: [number, number];
xy = [94.5, 20.1];

function useCoords(a: number, b: number): [number, number] {
  const lat = 100;
  const long = 200;

  return [lat, long];
}

const [lat, long] = useCoords(2, 3);

let user: [name: string, age: number];

user = ["john", 24.5];

console.log(user[1]);
