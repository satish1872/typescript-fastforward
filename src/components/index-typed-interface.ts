/* unions type */

let someId: string | number;

someId = "id1";
someId = 23;

let email: string | null;

email = "email@example.com";

email = "mario@example.com";

email = null;

type Id = number | string | null;

let anotherId: Id;

anotherId = "id12";
anotherId = null;
anotherId = 1244;

/* union pitfall */

function swapIdType(id: Id): Id {
  console.log(typeof id);
  if (typeof id === "string") {
    return parseInt(id);
  } else {
    return id;
  }
  //   parseInt(id);
}

const id1 = swapIdType(123);
const id2 = swapIdType("53");

console.log(`id1: ${id1}, id2: ${id2}`);

/* tagged interface */

interface User {
  type: "user";
  name: string;
  age: number;
  email: string;
  id: Id;
}

interface Person {
  type: "person";
  firstName: string;
  age: number;
  id: Id;
}

function logDetails(value: User | Person): void {
  /* if(typeof value==='User'){
        console.log(`User23`);

    } */
  if (value.type == "user") {
    console.log(`${value.email} ,${value.name} `);
  } else {
    console.log(`${value.firstName}, ${value.age} `);
  }
}

// logDetails()
