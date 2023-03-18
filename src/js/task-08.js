const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  let formFillResult = {};
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill all fields!");
  }
  formFillResult.email = email.value;
  formFillResult.password = password.value;


  console.log(formFillResult);
  event.currentTarget.reset();
}
