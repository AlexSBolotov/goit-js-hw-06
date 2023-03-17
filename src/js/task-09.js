const btnForChangeBgc = document.querySelector(".change-color");
const colorCode = document.querySelector(".color");
const body = document.body;

btnForChangeBgc.addEventListener("click", changeBgcBtnClick);

function changeBgcBtnClick() {
  colorCode.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
