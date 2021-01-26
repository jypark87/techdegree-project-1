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
const quotes = [];
for (let i = 0; i < 7; i++) {
  quotes.push({});
}

quotes[0].quote = "I would love to get paid to sleep. It would be a dream job";
quotes[0].source = '@dadsaysjokes';
quotes[0].citation = 'Instagram';

quotes[1].quote = "My doctor told me I'm going deaf. The news was hard for me to hear";
quotes[1].source = '@dadsaysjokes';
quotes[1].citation = 'Instagram';

quotes[2].quote = "I have a friend who tried to take a selfie in the shower, but the image was too blurry. He has selfie steam issues.";
quotes[2].source = '@dadsaysjokes';
quotes[2].citation = 'Instagram';

quotes[3].quote = "Her: I'm leaving. I'm sick of you wearing the same t-shirt every single day.\nMe: Wait. I can change.";
quotes[3].source = '@dadsaysjokes';
quotes[3].citation = 'Instagram';

quotes[4].quote = "Bring all of yourself to life. And if you're told you're 'too much', smile and think: maybe. Or maybe their capacity is too small.";
quotes[4].source = 'Glennon Doyle';

quotes[5].quote = "And suddenly you know... It's time to start somethign new and trust the magic of beginnings.";
quotes[5].source = 'Meister Eckhart';

quotes[6].quote = "Go ahead, make my day.";
quotes[6].source = 'Harry Callahan';
quotes[6].citation = "Sudden Impact";
quotes[6].year = 1983;

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let i = Math.floor(Math.random() * quotes.length);
  return quotes[i];
}

/***
 * `printQuote` function
***/
function printQuote() {
  let quote = getRandomQuote();
  let html = `
  <p class="quote"> ${quote.quote} </p>
  <p class="source"> ${quote.source}
  `;

  if (quote.citation) {
    html += `  <span class="citation"> ${quote.citation} </span>`;
  };

  if (quote.year) {
    html += `  <span class="year"> ${quote.year} </span>`;
  };

  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html; 
  return html;
}

// /**
//  * Adds a new quote to global variable quote. 
// >>>>>>>>>>>>> ?? IS THERE A PROPER WAY TO REFERENCE GLOBAL VAR "quote"?
//  *
//  * @param {string} quote - Text of the quote that will be displayed on the page
//  * @param {string} source - Creator of the quote. 
//  *                          Ex: "Mark Twain" or "Traditional Irish proverb” or "Anonymous".
//  * @param {string} citation - Identifies where the quote comes from.
//  *                            Ex: speech, publication or a movie. 
//  * @param {number} year - Identifies the year of the quote. 
// >>>>>>>>>>>>> ?? HOW DO YOU DOCUMENT THAT IT'S OPTIONAL? DEFAULT VALUES?
//  *
//  * @return {Object} A quote object.
//  *
//  * @example
//  *
//  *     foo('hello')
//  */
// function newQuote(text, source, citation, year) {
//   let quote = {
//     quote: text,
//     source: source,
//   };
                

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);