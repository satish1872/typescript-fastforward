"use strict";
//-------------
// classes 101
//-------------
class Pizza {
    constructor(title, price) {
        this.base = "classic";
        this.toppings = [];
        this.title = title;
        this.price = price;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTropping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizza = new Pizza("mario special", 15);
// console.log(pizza);
const pizzaTwo = new Pizza("luigi special", 16);
pizza.addTopping("Mushrooms");
pizza.addTopping("Olive");
pizza.removeTropping("Mushrooms");
pizza.selectBase("thin");
console.log(pizza);
/*
type Base = 'classic' | 'thick' | 'thin' | 'garlic'

class Pizza {
    constructor(title: string, price: number) {
        this.title = title
        this.price = price
    }

    title: string
    price: number
    base: Base = 'classic'
    toppings: string[] = []

    addTopping(topping: string): void {
        this.toppings.push(topping)
    }
    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter((t) => t !== topping)
    }
    selectBase(b: Base): void {
        this.base = b
    }
}

const pizza = new Pizza('mario special', 15)

pizza.selectBase('garlic')
pizza.addTopping('mushrooms')
pizza.addTopping('olives')

console.log(pizza)
*/
