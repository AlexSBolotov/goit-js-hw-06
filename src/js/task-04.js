const btnContainer = document.querySelector("#counter");
const incBtn = btnContainer.querySelector("[data-action='increment']");
const decBtn = btnContainer.querySelector("[data-action='decrement']");
const counter = btnContainer.querySelector("#value");

let counterValue = 0;
let step = 1;

const incBtnClick = (event) => {
  counterValue += step;
  counter.textContent = counterValue;
};

const decBtnClick = (event) => {
  counterValue -= step;
  counter.textContent = counterValue;
};

incBtn.addEventListener("click", incBtnClick);
decBtn.addEventListener("click", decBtnClick);
