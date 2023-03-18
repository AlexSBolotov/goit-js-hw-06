const input = document.querySelector("#validation-input");

input.addEventListener("blur", inputBlurHandler);

function addAndRemoveClass(classToAdd, classToRemove) {
  input.classList.add(classToAdd);
  input.classList.remove(classToRemove);
}

function inputBlurHandler(event) {
  if (
    event.currentTarget.value.length !==
    Number(event.currentTarget.dataset.length)
  ) {
    addAndRemoveClass("invalid", "valid");
  } else {
    addAndRemoveClass("valid", "invalid");
  }
}
//============1st variant======================================
// function inputBlurHandler(event) {
//   event.currentTarget.classList.remove("invalid");
//   event.currentTarget.classList.remove("valid");

//   if (event.currentTarget.value.length === 0) {
//     return;
//   } else if (
//     event.currentTarget.value.length !==
//     Number(event.currentTarget.dataset.length)
//   ) {
//     event.currentTarget.classList.add("invalid");
//   } else {
//     event.currentTarget.classList.add("valid");
//   }
// }

//============1st variant=functionsAdded=======================

// function addClass(className) {
//   return input.classList.add(className);
// }

// function removeClass(className) {
//   return input.classList.remove(className);
// }

// function inputBlurHandler(event) {
//   removeClass("invalid");
//   removeClass("valid");

//   if (event.currentTarget.value.length === 0) {
//     return;
//   } else if (
//     event.currentTarget.value.length !==
//     Number(event.currentTarget.dataset.length)
//   ) {
//     addClass("invalid");
//   } else {
//     addClass("valid");
//   }
// }

//============Toggle experiments================================
// function toggleClass(className) {
//   return input.classList.toggle(className);
// }

// function inputBlurHandler(event) {

//   if (event.currentTarget.value.length === 0) {
//     return;
//   } else if (
//     event.currentTarget.value.length ===
//     Number(event.currentTarget.dataset.length)
//   ) {
//     toggleClass("valid");
//   } else {
//     toggleClass("invalid");
//   }
// }
