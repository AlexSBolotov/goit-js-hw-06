const loginForm = document.querySelector(".login-form");

const handleFormSubmit = (event) => {
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
};

loginForm.addEventListener("submit", handleFormSubmit);

// чи це треба було зробити через FormData.forEach???
