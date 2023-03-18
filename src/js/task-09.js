const btnForChangeBgc = document.querySelector(".change-color");
const colorCode = document.querySelector(".color");
const body = document.body;

btnForChangeBgc.addEventListener("click", changeBgcBtnClick);

function changeBgcBtnClick() {
  const currentColor = getRandomHexColor();
  colorCode.textContent = currentColor;
  body.style.backgroundColor = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
