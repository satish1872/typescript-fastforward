/* generic interface */

interface Collections<T> {
  data: T[];
  name: string;
}

const collectionOne: Collections<string> = {
  data: ["mario", "boby", "cat"],
  name: "mario characters",
};

const collectionTwo: Collections<number> = {
  data: [1, 2, 3, 4, 25],
  name: "winning lottery number",
};

function randomCollectionItem<T>(c: Collections<T>): T {
  const i = Math.floor(Math.random() * c.data.length);
  return c.data[i];
}

const resultOne = randomCollectionItem<string>(collectionOne);

const resultTwo = randomCollectionItem(collectionTwo);

console.log(resultOne);
console.log(resultTwo);
