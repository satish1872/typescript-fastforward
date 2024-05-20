import { Pizzas, PizzaProps } from "./models/Pizza";

const rootEle = document.querySelector(".root")!;
function createPizzaTemplate(pizza: PizzaProps): string {
  return `
     <div class="pizza">
     <h2>
        ${pizza.title}
     </h2>
     <p class="toppings">
        ${pizza.toppings.join(" ")}
     </p>
     <p>
     ${pizza.description}
     </p>
     <span>$${pizza.price}</span>
     </div>
    `;
}
function renderTemplates(templates: string[], parent: Element): void {
  const templateElement = document.createElement("template");

  templates.map((template) => {
    templateElement.innerHTML += template;
  });

  parent.append(templateElement.content);
}

document.addEventListener("DOMContentLoaded", async () => {
  // load pizza data
  const pizzas = await Pizzas.loadAll();
  console.log(pizzas);
  /*   const pizzasTemplateString = pizzas.map((pizza) =>
    createPizzaTemplate(pizza)
  ); */

  // create template string for each pizza
  const pizzaTemplates = pizzas.map(createPizzaTemplate);

  // render pizza template to DOM
  renderTemplates(pizzaTemplates, rootEle);
});
