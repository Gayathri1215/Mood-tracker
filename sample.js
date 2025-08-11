document.getElementById("Submit").addEventListener("click", function () {
    const mood = document.getElementById("moodSelect").value;
    const quoteEl = document.getElementById("quote");

    const quotes = {
        happy: "Keep smiling, because life is a beautiful thing!",
        sad: "Tough times never last, but tough people do.",
        angry: "Take a deep breath. You got this.",
        excited: "The best is yet to come, enjoy every moment!"
    };

    if (mood) {
        quoteEl.textContent = quotes[mood];
        document.body.style.backgroundColor =
            mood === "happy" ? "#ffeb3b" :
            mood === "sad" ? "#90caf9" :
            mood === "angry" ? "#ef9a9a" :
            "#a5d6a7";
    } else {
        quoteEl.textContent = "Please select a mood first.";
        document.body.style.backgroundColor = "white";
    }
});
