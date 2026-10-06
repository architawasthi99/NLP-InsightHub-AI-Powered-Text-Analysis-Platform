const textInput = document.getElementById("textInput");

const characterCount = document.getElementById("characterCount");

const clearBtn = document.getElementById("clearBtn");

const analyzeBtn = document.getElementById("analyzeBtn");

const buttonText = document.getElementById("buttonText");

const loader = document.getElementById("loader");

const resultSection = document.getElementById("resultSection");


// =========================
// CHARACTER COUNT
// =========================

textInput.addEventListener("input", function () {

    const count = textInput.value.length;

    characterCount.textContent = `${count} characters`;

});


// =========================
// CLEAR BUTTON
// =========================

clearBtn.addEventListener("click", function () {

    textInput.value = "";

    characterCount.textContent = "0 characters";

    resultSection.style.display = "none";

    textInput.focus();

});


// =========================
// CHECK TEXT BUTTON
// =========================

analyzeBtn.addEventListener("click", function () {

    const text = textInput.value.trim();


    if (text === "") {

        alert("Please enter some text.");

        textInput.focus();

        return;
    }


    // Frontend loading state

    analyzeBtn.disabled = true;

    buttonText.textContent = "Checking...";

    loader.style.display = "inline-block";


    /*
        Abuse detection will be connected
        to the Flask backend later.

        No detection is performed here.
    */


    setTimeout(function () {

        analyzeBtn.disabled = false;

        buttonText.textContent = "Check Text";

        loader.style.display = "none";

    }, 1000);

});