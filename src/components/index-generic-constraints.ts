//-----------------
// Generic Classes
//-----------------

interface HasId {
  id: number;
}

class DataCollection<T extends HasId> {
  constructor(private data: T[]) {}

  loadOne(): T {
    const i = Math.floor(Math.random() * this.data.length);
    return this.data[i];
  }
  loadAll(): T[] {
    return this.data;
  }
  add(val: T): T[] {
    this.data.push(val);
    return this.data;
  }
  deleteOne(id: number): void {
    this.data = this.data.filter((item) => item.id !== id);
  }
}

interface User extends HasId {
  name: string;
  score: number;
}

const users = new DataCollection([
  { name: "shaun", score: 125, id: 1 },
  { name: "mario", score: 100, id: 2 },
  { name: "peach", score: 150, id: 3 },
]);

users.add({ name: "luigi", score: 50, id: 23 });

console.log("load one - ", users.loadOne());
console.log("load all - ", users.loadAll());
console.log("deleted one", users.deleteOne(2));

/* 
interface User {
  name: string;
  score: number;
  id: number;
}

const users = new DataCollection([
  { name: "shaun", score: 125, id: 12 },
  { name: "mario", score: 100, id: 12 },
  { name: "peach", score: 150, id: 12 },
]);
*/

/* 
  
  class DataCollection<T> {
      constructor(private data: T[]) {}
  
      loadOne(): T {
          const i = Math.floor(Math.random() * this.data.length)
          return this.data[i]
      }
      loadAll(): T[] {
          return this.data
      }
      add(val: T): T[] {
          this.data.push(val)
          return this.data
      }
  }
  
  interface User {
      name: string
      score: number
  }
  
  const users = new DataCollection<User>([
      { name: 'shaun', score: 125 },
      { name: 'mario', score: 100 },
      { name: 'peach', score: 150 },
  ])
  
  users.add({ name: 'luigi', score: 50 })
  
  console.log('load one - ', users.loadOne())
  console.log('load all - ', users.loadAll())
  */
