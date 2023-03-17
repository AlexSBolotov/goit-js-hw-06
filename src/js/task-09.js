const btnForChangeBgc = document.querySelector(".change-color");
const colorCode = document.querySelector(".color");
const body = document.body;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const changeBgcBtnClick = (event) => {
  colorCode.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
};

btnForChangeBgc.addEventListener("click", changeBgcBtnClick);
