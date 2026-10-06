const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");


loginForm.addEventListener("submit", function (event) {

    let valid = true;

    emailError.textContent = "";
    passwordError.textContent = "";


    // Email validation

    if (emailInput.value.trim() === "") {

        emailError.textContent = "Email is required.";

        valid = false;
    }


    // Password validation

    if (passwordInput.value.trim() === "") {

        passwordError.textContent = "Password is required.";

        valid = false;
    }


    // Stop form submission if validation fails

    if (!valid) {

        event.preventDefault();

    }

});