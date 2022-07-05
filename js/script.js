/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "The only way to have a life is to commit to it like crazy.",
    quoteSource: "Angelina Jolie",
    quoteCitation: `Reader's Digest`,
    quoteYear: 2002,
    quoteTag: `#motivation#life`
  },
  {
    quote: "Success is falling nine times and getting up ten.",
    quoteSource: "Jon Bon Jovi",
    quoteCitation: `Reader's Digest`,
    quoteYear: 2013,
    quoteTag: `#motivation#life`
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    quoteSource: "Theodore Roosevelt",
    quoteCitation: "Twitter",
    quoteYear: 2000,
    quoteTag: `#belief#life`
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    quoteSource: "Oscar Wilde",
    quoteCitation: "Pinterest",
    quoteYear: 2002,
    quoteTag: `#belief#motivation`
  },
  {
    quote: "The best way to predict the future is to invent it.",
    quoteSource: "Alan Kay",
    quoteCitation:"Twitter",
    quoteYear: 1992,
    quoteTag: `#story#writing`
  },
  {
    quote: "Imagination is everything. It is the preview of life’s coming attractions.",
    quoteSource: "Albert Einstein",
    quoteCitation: "Pinterest",
    quoteYear: 1990,
    quoteTag: `#life#belief`
  }
];

// BG color array
const bgColors = [
  '#800080',
  '#964B00',
  '#023020',
  '#8b0000',
  '#483248',
  '#000080'
]

/***
 * `getRandomColor` function
***/
function getRandomColor() {
    const randomColor = Math.floor(Math.random() * bgColors.length);
    // Applies random bg color to the body element
    document.body.style.backgroundColor = bgColors[randomColor];
  }

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const randomQuote =  Math.floor(Math.random() * quotes.length);
  getRandomColor()

  const getQuote = quotes[randomQuote];
  return getQuote;
}

/***
 * `printQuote` function
***/
function printQuote() {
  const displayRandomQuote = getRandomQuote();
  
  let showQuote = '';
  showQuote += `<p class="quote">${displayRandomQuote.quote}</p>`;
  showQuote += `<p class="source">${displayRandomQuote.quoteSource}`;

  // Check if the object.property exists, if it's true display the content
  if (displayRandomQuote.hasOwnProperty("quoteCitation")) {    
    showQuote += `<span class="citation">${displayRandomQuote.quoteCitation}</span>`;
  } 
  if (displayRandomQuote.hasOwnProperty("quoteYear")) {
    showQuote += `<span class="year">${displayRandomQuote.quoteYear}</span>`;
  }
  if (displayRandomQuote.hasOwnProperty("quoteTag")) {
    showQuote += `<span class="tag">${displayRandomQuote.quoteTag}</span>`;
  }

  showQuote += `</p>`;
  document.getElementById('quote-box').innerHTML = showQuote; 
}

// Refresh quote every 6 seconds
setInterval(printQuote, 6000); 

/***
 * click event listener for the print quote button
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);