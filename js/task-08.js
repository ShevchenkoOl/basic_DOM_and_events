const form = document.querySelector(".login-form");
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');

const formData = {};
const checkForm = (event) => {
    event.preventDefault();
    if (email.value.length == 0 || password.value.length == 0) {
      alert("All fields must be completed!");
    } else {
      formData.user = email.value;
      formData.pas = password.value;
    }
    console.log(formData);
    console.log(JSON.stringify(formData, null, 2));
    form.reset();
  }

form.addEventListener("submit", checkForm);
