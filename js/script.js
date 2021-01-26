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
quotes[0].source = 'Instagram: @dadsaysjokes';

quotes[1].quote = "My doctor told me I'm going deaf. The news was hard for me to hear";
quotes[1].source = 'Instagram: @dadsaysjokes';

quotes[2].quote = "I have a friend who tried to take a selfie in the shower, but the image was too blurry. He has selfie steam issues.";
quotes[2].source = 'Instagram: @dadsaysjokes';

quotes[3].quote = "Her: I'm leaving. I'm sick of you wearing the same t-shirt every single day.\nMe: Wait. I can change.";
quotes[3].source = 'Instagram: @dadsaysjokes';

quotes[4].quote = "Bring all of yourself to life. And if you're told you're 'too much', smile and think: maybe. Or maybe their capacity is too small.";
quotes[4].source = 'Glennon Doyle';

quotes[5].quote = "And suddenly you know... It's time to start somethign new and trust the magic of beginnings.";
quotes[5].source = 'Meister Eckhart';

quotes[6].quote = "Go ahead, make my day.";
quotes[6].source = 'Harry Callahan';
quotes[6].citation = "Sudden Impact";
quotes[6].year = 1983;

console.log(quotes);


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


// /* ============================= */
// /**
//  * @type {Array.<Object>}
//  */

// const quotes = [];

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
  
//   // only include optional properties if values are provided
//   if (citation) {
//     quote.citation = citation; 
//   }
  
//   if (year) {
//     quote.year = year; 
//   }
  
//   return quote;
  
// }

// 
// /**
//  * Selects quote at random
//  */
// function selectQuote(quotes) {
//   let i = Math.floor(Math.random() * quotes.length);
//   return quotes[i];
// }

// /**
//  * Prints quote to screen
//  */
// function printQuote(quotes) {
//   let quote = selectQuote(quotes);
  
//   let text = `<h4>${quote.quote}</h4>`;
  
//   document.querySelector('main').insertAdjacentHTML('afterbegin',text);
// }
// /* ============================= */                    

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);