const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const markup = (setArr) => {
  return setArr.map((el) => {
    const ingredientEl = document.createElement("li");
    ingredientEl.textContent = el;
    ingredientEl.classList.add("item");

    return ingredientEl;
  });
};

ingredientsListEl.append(...markup(ingredients));
