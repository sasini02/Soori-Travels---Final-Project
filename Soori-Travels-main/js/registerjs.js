function alphabeticInput(event) {
  const input = event.target;
  const regex = /^[a-zA-Z\s]+$/;
  const isValid = regex.test(input.value);

  if (!isValid) {
    input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
  }
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirmPassword");
  var showPasswordCheckbox = document.getElementById("showPassword");

  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text";
    confirmPasswordInput.type = "text";
  } else {
    passwordInput.type = "password";
    confirmPasswordInput.type = "password";
  }
}