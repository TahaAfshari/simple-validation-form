const getElement = (id) => document.getElementById(id);

const firstnameInput = getElement("firstname"),
  firstnameSpan = getElement("firstname_validation"),
  phoneCodeInput = getElement("phone-code"),
  phoneCodeSpan = getElement("phone-code_validation"),
  phoneNumberInput = getElement("phone-number"),
  phoneNumberSpan = getElement("phone-number_validation"),
  emailInput = getElement("email"),
  emailSpan = getElement("email_validation"),
  passwordInput = getElement("password"),
  passwordSpan = getElement("password_validation"),
  repasswordInput = getElement("rePassword"),
  repasswordSpan = getElement("rePassword_validation"),
  registerBtn = getElement("submit");

let firstnameValidate = false,
  phoneNumberValidate = false,
  emailValidate = false,
  passwordValidate = false,
  repasswordValidate = false;
let phoneCodeValidate = true;

const addInputListener = (inputElement, validationFunction) => {
  inputElement.addEventListener("input", validationFunction);
};

addInputListener(firstnameInput, firstnameValidation);
addInputListener(phoneCodeInput, phoneCodeValidation);
addInputListener(phoneNumberInput, phoneNumberValidation);
addInputListener(emailInput, emailValidation);
addInputListener(passwordInput, passwordValidation);
addInputListener(repasswordInput, repasswordValidation);

registerBtn.addEventListener("click", registerFunction);

function updateValidationStatus(element, isValid) {
  element.textContent = isValid ? "✅" : "❌";
}

function firstnameValidation() {
  firstnameValidate = Boolean(firstnameInput.value);
  updateValidationStatus(firstnameSpan, firstnameValidate);
}

function phoneCodeValidation() {
  const regex = /^(\+|00)[0-9]+$/;
  phoneCodeValidate = regex.test(phoneCodeInput.value);
  updateValidationStatus(phoneCodeSpan, phoneCodeValidate);
}

function phoneNumberValidation() {
  const regex = /09(0[1-2]|1[0-9]|3[0-9]|2[0-1]|9[0-9])[0-9]{3}[0-9]{4}/;
  phoneNumberValidate = regex.test(phoneNumberInput.value);
  updateValidationStatus(phoneNumberSpan, phoneNumberValidate);
}

function emailValidation() {
  const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  emailValidate = regex.test(emailInput.value);
  updateValidationStatus(emailSpan, emailValidate);
}

function passwordValidation() {
  const minMaxLength = /^[\s\S]{8,32}$/,
    upper = /[A-Z]/,
    lower = /[a-z]/,
    number = /[0-9]/,
    special = /[ !"#$%&'()*+,\-./:;?@[\\\]^_`{|}~]/;
  passwordValidate =
    minMaxLength.test(passwordInput.value) &&
    upper.test(passwordInput.value) &&
    lower.test(passwordInput.value) &&
    number.test(passwordInput.value) &&
    special.test(passwordInput.value);
  updateValidationStatus(passwordSpan, passwordValidate);
}

function repasswordValidation() {
  repasswordValidate = passwordInput.value === repasswordInput.value;
  updateValidationStatus(repasswordSpan, repasswordValidate);
}

function registerFunction(event) {
  event.preventDefault();
  if (
    firstnameValidate &&
    phoneCodeValidate &&
    phoneNumberValidate &&
    emailValidate &&
    passwordValidate &&
    repasswordValidate
  ) {
    alert("Registering...");
  } else {
    if (!firstnameValidate) firstnameSpan.textContent = "❌";
    if (!phoneCodeValidate) phoneCodeSpan.textContent = "❌";
    if (!phoneNumberValidate) phoneNumberSpan.textContent = "❌";
    if (!emailValidate) emailSpan.textContent = "❌";
    if (!passwordValidate) passwordSpan.textContent = "❌";
    if (!repasswordValidate) repasswordSpan.textContent = "❌";
    alert("Please fill the form correctly");
  }
}
