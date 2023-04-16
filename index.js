import quotes from "./dummyAPI.js";

let button = document.getElementById('btn');
let display = document.getElementById('display');
let header = document.getElementById('title');
let p1 = document.getElementById('text');
let p2 = document.getElementById('author');
// you can access individual quotes from the quotes array like this:


// your job is to use DOM manipulation to display a random quote in the index.html page that is retrieved from the quotes array

// functions
function randomQuote() {
  let index = quotes.length;
  let quote = quotes[Math.floor(Math.random() * index)];
  p1.innerHTML = quote.text;
  p2.innerHTML = quote.author;
}

button.addEventListener('click', randomQuote);