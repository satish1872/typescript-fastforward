interface Author {
  name: string;
  avatar: string;
}

const author1: Author = {
  name: "John",
  avatar: "/img/mario.png",
};

interface Post {
  titles: string;
  body: string;
  tags: string[];
  created_at: Date;
  author: Author;
}

const newPost: Post = {
  titles: "post1",
  body: "body1",
  tags: ["game", "tech"],
  created_at: new Date(),
  author: author1,
};

function createPost(post: Post): void {
  console.log(`created post ${post.titles} by ${post.author.name}`);
}
createPost(newPost);

let posts: Post[] = [];
posts.push(newPost);
posts.push({ ...newPost, titles: "post2" });

createPost(posts[1]);

