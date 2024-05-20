//------------------------
// extending type aliases
//------------------------

type Person = {
  id: string | number;
  firstName: string;
};

const personOne = {
  id: 1,
  firstName: "John",
};

type User = Person & {
  email: string;
};

const personTwo: User = {
  id: "2",
  firstName: "Harry",
  email: "harris@gmail.com",
};

const personThree = {
  email: "peach@gmail.com",
};

function printUser(user: User) {
  console.log(
    `userId : ${user.id}, userEmail : ${user.email}, userName : ${user.firstName}`
  );
}

printUser(personOne);
printUser(personTwo);
printUser(personThree);

/* 
type Person = {
	id: string | number
	firstName: string
}

type User = Person & {
	email: string
}

const personOne = {
	id: 1,
	firstName: 'mario',
}
const personTwo = {
	id: '2',
	firstName: 'yoshi',
	email: 'yoshi@netninja.dev',
}
const personThree = {
	email: 'peach@netninja.dev',
}

function printUser(user: User) {
	console.log(user.id, user.email, user.firstName)
}

// printUser(personOne) --> not allowed
printUser(personTwo)
// printUser(personThree) --> not allowed
*/
