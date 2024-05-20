//------------------
// access modifiers
//------------------

type Base = "classic" | "thick" | "thin" | "garlic";
class MenuItem {
  constructor(private title: string, private price: number) {
    // this.title = title;
    // this.price = price;
  }
  get details(): string {
    return `${this.title} - ${this.price}`;
  }
}

class Pizza extends MenuItem {
  /*  
 constructor(private title: string, private price: number) {
    // this.title = title;
    // this.price = price;
  } 

  //   private title: string;
  //   private price: number;

  */

  constructor(title: string, price: number) {
    // pass all argument parent class constrctor required so that it can be set in its parent class
    super(title, price);
  }

  private base: Base = "classic";
  private toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }
  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }
  selectBase(b: Base): void {
    this.base = b;
  }
}

const pizzaOne: Pizza = new Pizza("mario special", 15);
const pizzaTwo: Pizza = new Pizza("mario special2", 16);
function addMushroomsToPizzas(pizzas: Pizza[]): void {
  pizzas.map((p) => p.addTopping("mushrooms"));
}

addMushroomsToPizzas([
  pizzaOne,
  pizzaTwo,
  //   {
  //     title: "Special",
  //     price: 18,
  //   },
]);

// console.log(pizzaOne, "\n", pizzaTwo);

// pizzaOne.details();
function printMenuItems(item: MenuItem): void {
  console.log(item.details);
}

printMenuItems(pizzaOne);

// printMenuItems()
