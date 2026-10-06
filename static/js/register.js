const registerForm = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const termsInput = document.getElementById("terms");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const termsError = document.getElementById("termsError");


registerForm.addEventListener("submit", function (event) {

    let valid = true;

    // Clear previous errors

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    termsError.textContent = "";


    // Name validation

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Name is required.";

        valid = false;
    }


    // Email validation

    if (emailInput.value.trim() === "") {

        emailError.textContent = "Email is required.";

        valid = false;
    }


    // Password validation

    if (passwordInput.value.trim() === "") {

        passwordError.textContent = "Password is required.";

        valid = false;

    } else if (passwordInput.value.length < 6) {

        passwordError.textContent =
            "Password must be at least 6 characters.";

        valid = false;
    }


    // Confirm password validation

    if (confirmPasswordInput.value.trim() === "") {

        confirmPasswordError.textContent =
            "Please confirm your password.";

        valid = false;

    } else if (
        passwordInput.value !== confirmPasswordInput.value
    ) {

        confirmPasswordError.textContent =
            "Passwords do not match.";

        valid = false;
    }


    // Terms validation

    if (!termsInput.checked) {

        termsError.textContent =
            "Please accept the Terms & Conditions.";

        valid = false;
    }


    // Stop form submission if validation fails

    if (!valid) {

        event.preventDefault();
    }

});