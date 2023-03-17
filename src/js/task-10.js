const formContainer = document.querySelector("#controls");
const createBtn = formContainer.querySelector("[data-create]");
const destroyBtn = formContainer.querySelector("[data-destroy]");
const divNumbers = formContainer.querySelector("input");
const divToInsert = document.querySelector("#boxes");

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

let divWidth = 30;
let divHeigth = 30;
const createBoxes = (amount) => {
  const divArray = [];
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = document.createElement("div");
    console.log(newDiv);
    divArray.push(newDiv);
    newDiv.style.width = `${divWidth}px`;
    newDiv.style.height = `${divHeigth}px`;
    divWidth += 10;
    divHeigth += 10;
    newDiv.style.backgroundColor = getRandomHexColor();
  }
  // divWidth = 30;
  // divHeigth = 30;

  return divArray;
};

const insertBoxesBtnClick = (event) =>
  divToInsert.append(...createBoxes(divNumbers.value));

const destroyBoxesBtnClick = (event) => {
  divToInsert.innerHTML = "";
  divWidth = 30;
  divHeigth = 30;
};

createBtn.addEventListener("click", insertBoxesBtnClick);
destroyBtn.addEventListener("click", destroyBoxesBtnClick);
