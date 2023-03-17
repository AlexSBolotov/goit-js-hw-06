const refs = {
  input: document.querySelector("#name-input"),
  btn: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", setInputTextToBtn);

function setInputTextToBtn(event) {
  if (event.currentTarget.value !== "") {
    refs.btn.textContent = event.currentTarget.value;
  } else {
    refs.btn.textContent = "Anonymous";
  }
}
