const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  let formFillResult = {};
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (!email.value || !password.value) {
    alert("Please fill all fields!");
    return;
  }

  formFillResult.email = email.value;
  formFillResult.password = password.value;

  console.log(formFillResult);
  event.currentTarget.reset();
}

// if (email.value === "" || password.value === "") {
//   alert("Please fill all fields!");
//   return;
// }
