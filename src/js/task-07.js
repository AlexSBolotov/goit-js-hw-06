const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.input.addEventListener("input", setInputValueToTextFontSize);

function setInputValueToTextFontSize(eve) {
  refs.text.style.fontSize = `${eve.currentTarget.value}px`;
}
