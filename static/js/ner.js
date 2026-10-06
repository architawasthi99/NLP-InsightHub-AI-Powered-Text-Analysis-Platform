const textInput = document.getElementById("textInput");
const characterCount = document.getElementById("characterCount");

const clearBtn = document.getElementById("clearBtn");
const analyzeBtn = document.getElementById("analyzeBtn");

const buttonText = document.getElementById("buttonText");
const loader = document.getElementById("loader");

const resultsSection = document.getElementById("resultsSection");


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

    resultsSection.style.display = "none";

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
        Backend will be connected here later.

        For now, we are only demonstrating
        the frontend loading state.
    */


    setTimeout(function () {

        analyzeBtn.disabled = false;

        buttonText.textContent = "Analyze Text";

        loader.style.display = "none";

    }, 1000);

});