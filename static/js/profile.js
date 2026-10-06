const editProfileBtn = document.getElementById("editProfileBtn");

const editModal = document.getElementById("editModal");

const closeModal = document.getElementById("closeModal");

const editProfileForm = document.getElementById("editProfileForm");

const editName = document.getElementById("editName");

const editEmail = document.getElementById("editEmail");

const profileName = document.getElementById("profileName");

const profileEmail = document.getElementById("profileEmail");

const detailName = document.getElementById("detailName");

const detailEmail = document.getElementById("detailEmail");

const profileAvatar = document.getElementById("profileAvatar");


// Open modal

editProfileBtn.addEventListener("click", function () {

    editName.value = profileName.textContent.trim();

    editEmail.value = profileEmail.textContent.trim();

    editModal.style.display = "flex";

});


// Close modal

closeModal.addEventListener("click", function () {

    editModal.style.display = "none";

});


// Close modal when clicking outside

window.addEventListener("click", function (event) {

    if (event.target === editModal) {

        editModal.style.display = "none";

    }

});


// Save profile

editProfileForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = editName.value.trim();

    const email = editEmail.value.trim();


    if (name === "") {

        alert("Please enter your name.");

        return;
    }


    if (email === "") {

        alert("Please enter your email.");

        return;
    }


    // Update profile information

    profileName.textContent = name;

    profileEmail.textContent = email;

    detailName.textContent = name;

    detailEmail.textContent = email;


    // Update avatar

    profileAvatar.textContent = name.charAt(0).toUpperCase();


    // Close modal

    editModal.style.display = "none";


    alert("Profile updated successfully!");

});