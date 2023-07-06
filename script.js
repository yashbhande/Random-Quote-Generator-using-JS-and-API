// Get references to HTML elements
const quoteText = document.getElementById('quote-text');
const quoteTags = document.getElementById('quote-tags');
const quoteAuthor = document.getElementById('quote-author');
const quoteQuoteBtn = document.getElementById('gen-quote-btn');

// Function to fetch a random quote from the API and update the HTML elements
function randomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteText.textContent = data.content;
            quoteTags.textContent = data.tags;
            quoteAuthor.textContent = `-- ${data.author}`;
        });
}

// Fetch a random quote when the page loads
randomQuote();

// Add an event listener to the quote button to fetch a new quote when clicked
quoteQuoteBtn.addEventListener('click', () => {
    randomQuote();
});
