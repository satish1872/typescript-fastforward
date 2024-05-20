import { DataResource } from "../services/DataResource";

export interface PizzaProps {
  title: string;
  description: string;
  toppings: string[];
  price: number;
}

export const Pizzas = new DataResource<PizzaProps>(
  "http://localhost:3000/pizzas"
);

Pizzas.save({
  title: "Mario Special2",
  description:
    "An extra cheesy pizza2 on a thin and crispy base, loaded with olives and mushrooms.",
  toppings: ["mushrooms", "olives", "onions"],
  price: 14,
});

