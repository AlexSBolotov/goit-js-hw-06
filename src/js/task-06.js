const input = document.querySelector("#validation-input");

input.addEventListener("blur", inputBlurHandler);

function inputBlurHandler(event) {
  event.currentTarget.classList.remove("invalid");
  event.currentTarget.classList.remove("valid");

  if (event.currentTarget.value.length === 0) {
    return;
  } else if (
    event.currentTarget.value.length !==
    Number(event.currentTarget.dataset.length)
  ) {
    event.currentTarget.classList.add("invalid");
  } else {
    event.currentTarget.classList.add("valid");
  }
}
