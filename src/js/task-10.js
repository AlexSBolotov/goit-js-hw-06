const formContainer = document.querySelector("#controls");
const createBtn = formContainer.querySelector("[data-create]");
const destroyBtn = formContainer.querySelector("[data-destroy]");
const divNumbers = formContainer.querySelector("input");
const divToInsert = document.querySelector("#boxes");

createBtn.addEventListener("click", insertBoxesBtnClick);
destroyBtn.addEventListener("click", destroyBoxesBtnClick);

function insertBoxesBtnClick() {
  divToInsert.append(...createBoxes(divNumbers.value));
}

function destroyBoxesBtnClick() {
  divToInsert.innerHTML = "";
  size = 30;
}

let size = 30;

function createBoxes(amount) {
  const divArray = [];
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = document.createElement("div");
    console.log(newDiv);
    divArray.push(newDiv);
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    size += 10;
    newDiv.style.backgroundColor = getRandomHexColor();
  }
  return divArray;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
