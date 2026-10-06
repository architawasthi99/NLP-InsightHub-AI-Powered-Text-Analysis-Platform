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
// ANALYZE BUTTON
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

    buttonText.textContent = "Analyzing...";

    loader.style.display = "inline-block";


    /*
        Sentiment analysis will be connected
        to the Flask backend later.

        No prediction is performed here.
    */


    setTimeout(function () {

        analyzeBtn.disabled = false;

        buttonText.textContent = "Analyze Sentiment";

        loader.style.display = "none";

    }, 1000);

});