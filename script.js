// script.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("quotes.txt")
    .then((response) => response.text())
    .then((data) => {
      const quotes = data.split("@").filter((quote) => quote.trim() !== "");
      let index = 0;

      function displayQuote() {
        document.getElementById("quote").innerText = quotes[index];
        index = (index + 1) % quotes.length;
      }

      document.getElementById("quote").addEventListener("click", displayQuote);

      displayQuote();
      setInterval(displayQuote, 60000); // Change quote every 3 seconds
    })
    .catch((error) => console.error("Error fetching quotes:", error));
});
