type Rgb = [number, number, number];

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  console.log(`r: ${r}, g: ${g}, b: ${b}`);
  return [r, g, b];
  //   return true;
}

const colorOne = getRandomColor();
const colorTwo = getRandomColor();

type User = {
  name: string;
  score: number;
};

const user1: User = {
  name: "John",
  score: 1,
};

const user2: User = {
  name: "Harry",
  score: 2,
};

function formatUser(user: User) {
  console.log(`${user.name}, has a score: ${user.score}`);
}

formatUser(user2);
