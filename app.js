const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirmPassword");
const submitButton = document.querySelector("#submitButton");

console.log("hello world!");

submitButton.addEventListener("click", (e) => {
  if (
    passwordField.value.toString() !== confirmPasswordField.value.toString()
  ) {
    passwordField.setCustomValidity("Passwords do not match");
  } else {
    passwordField.setCustomValidity("");
  }
});
