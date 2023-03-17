const allCategories = document.querySelector("#categories");

console.log(`Number of categories: ${allCategories.children.length}`);

const allSubCategoties = document.querySelectorAll(".item");

allSubCategoties.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
