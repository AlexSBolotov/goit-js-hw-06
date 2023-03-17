const input = document.querySelector("#validation-input");

input.addEventListener("blur", inputBlurHandler);

function inputBlurHandler(event) {
  input.classList.remove("invalid");
  input.classList.remove("valid");

  if (input.value.length === 0) {
    return;
  } else if (input.value.length !== Number(input.dataset.length)) {
    input.classList.add("invalid");
  } else {
    input.classList.add("valid");
  }
}

//event.currentTarget.value.length !== Number(input.dataset.length)
