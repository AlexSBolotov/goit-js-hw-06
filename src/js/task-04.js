const btnContainer = document.querySelector("#counter");
const incBtn = btnContainer.querySelector("[data-action='increment']");
const decBtn = btnContainer.querySelector("[data-action='decrement']");
const counter = btnContainer.querySelector("#value");

incBtn.addEventListener("click", incBtnClick);
decBtn.addEventListener("click", decBtnClick);

let counterValue = 0;
let step = 1;

function incBtnClick() {
  counterValue += step;
  counter.textContent = counterValue;
}

function decBtnClick() {
  counterValue -= step;
  counter.textContent = counterValue;
}
