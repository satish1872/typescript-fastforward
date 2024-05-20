//-------------------
// Intersection Type
//-------------------

/* type Person = {
	firstName: string
	id: number
}

type User = Person & {
	email: string
} */

interface HasID {
  id: number;
}

function addIdToValue<T>(val: T): T & HasID {
  const id = Math.floor(Math.random());
  return {
    ...val,
    id,
  };
}

interface Post {
  title: string;
  thumsUp: number;
}

const post1: Post = {
  title: "post1",
  thumsUp: 1,
};
const post = addIdToValue<Post>(post1);

console.log(`Post =${post.title} ,thumsUp= ${post.thumsUp} ,id=  ${post.id}`);

// example with generic function
/* 
function addIdToValue<T>(val: T): T & HasID {
	const id = Math.random()

	return { ...val, id }
}

interface Post {
	title: string
	thumbsUp: number
}

interface HasID {
	id: number
}

const post = addIdToValue<Post>({ title: 'Marmite Rules', thumbsUp: 250 })
console.log(post.id, post.title, post.thumbsUp) */
