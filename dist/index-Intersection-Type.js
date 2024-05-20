"use strict";
//-------------------
// Intersection Type
//-------------------
function addIdToValue(val) {
    const id = Math.floor(Math.random());
    return Object.assign(Object.assign({}, val), { id });
}
const post1 = {
    title: "post1",
    thumsUp: 1,
};
const post = addIdToValue(post1);
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
