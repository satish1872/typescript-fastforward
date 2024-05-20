import { PizzaProps, Pizzas } from "./models/Pizza";

const titleInput = document.querySelector(
  'input[name="title"]'
) as HTMLInputElement;

titleInput.value;

const descriptionInput = document.querySelector(
  "textarea"
) as HTMLTextAreaElement;

const form = document.querySelector(".create") as HTMLFormElement;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const newPizza: PizzaProps = {
    title: data.get("title") as string,
    description: data.get("description") as string,
    toppings: data.getAll("toppings") as [],
    price: parseInt(data.get("price") as string),
  };

  const res = await Pizzas.save(newPizza);

  if (!res.ok) {
    console.log("not able to save new pizza");
  } else {
    window.location.href = "/";
  }
});

/* 
  title: string;
  description: string;
  toppings: string[];
  price: number;
*/
