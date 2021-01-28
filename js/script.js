/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Stores quote objects.
 * @type {Array.<Object>}
***/
const quotes = [];
for (let i = 0; i < 7; i++) {
  quotes.push({});
}

/*** 
 * Stores last two quotes displayed.
 * @type {String}
***/
let lastQuotes = ['',''];

// Insert data for each quote object in the quotes array.
quotes[0].quote = `I would love to get paid to sleep. It would be a dream job.`;
quotes[0].source = '@dadsaysjokes';
quotes[0].citation = 'Instagram';
quotes[0].tags = '#dadjoke';

quotes[1].quote = `My doctor told me I'm going deaf. The news was hard for me to hear.`;
quotes[1].source = '@dadsaysjokes';
quotes[1].citation = 'Instagram';
quotes[1].tags = '#dadjoke';

quotes[2].quote = `I have a friend who tried to take a selfie in the shower, but the image was too blurry. He has selfie steam issues.`;
quotes[2].source = '@dadsaysjokes';
quotes[2].citation = 'Instagram';
quotes[2].tags = '#dadjoke';

quotes[3].quote = `Her: I'm leaving. I'm sick of you wearing the same t-shirt every single day.<br>Me: Wait. I can change.`;
quotes[3].source = '@dadsaysjokes';
quotes[3].citation = 'Instagram';
quotes[3].tags = '#dadjoke';

quotes[4].quote = "Bring all of yourself to life. And if you're told you're 'too much', smile and think: maybe. Or maybe their capacity is too small.";
quotes[4].source = 'Glennon Doyle';

quotes[5].quote = "And suddenly you know... It's time to start something new and trust the magic of beginnings.";
quotes[5].source = 'Meister Eckhart';

quotes[6].quote = "Go ahead, make my day.";
quotes[6].source = 'Harry Callahan';
quotes[6].citation = "Sudden Impact";
quotes[6].year = 1983;

/***
 * 
 * Returns a random quote from the quotes array.
 * 
 * @return {Object.<string, string, OPTIONAL string, OPTIONAL string>} A random quote object.
***/
function getRandomQuote() {
  let newQuote = '';

  do {
    let i = Math.floor(Math.random() * quotes.length);
    newQuote = quotes[i];
  } while (lastQuotes.includes(newQuote));

  lastQuotes.unshift(newQuote);
  lastQuotes.pop();
  return newQuote;
}

/***
 * Displays random quote to page different from previous two quotes.
 * 
 * @return {string} HTML for the random quote displayed on the page.
***/
function printQuote() {
  let quote = getRandomQuote();

  // Construct HTML to display required quote properties.
  let html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}`;

  // Check for optional quote properties and append to HTML.
  

  for (key in quote) {
    if (key !== 'quote' && key !== 'source')
    html += `<span class="${key}">${quote[key]}</span>`;
  };
  html += `</p>`;

  // Insert HTML to page and return HTML string.
  document.getElementById('quote-box').innerHTML = html; 
  runChangeColor();
  return html;
}    

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/**
 * Automatically executes button action at a regular interval
 * 
 * Code adapted from: https://stackoverflow.com/questions/2133166/loop-timer-in-javascript
 */
function autoRefreshQuote() {
  printQuote();
}
let tid = setInterval(autoRefreshQuote, 3000);

/**
 * Stops the timer
 * 
 * Code adapted from: https://stackoverflow.com/questions/2133166/loop-timer-in-javascript
 */
function abortTimer() { 
  clearInterval(tid);
}

// change background color
const backColors = [];
backColors.push('rgb(58, 193, 98)');
backColors.push('rgb(168, 50, 162)');
backColors.push('rgb(0, 169, 247)');
backColors.push('rgb(247, 198, 0)');
backColors.push('rgb(38, 38, 38)');
backColors.push('rgb(252, 70, 45)');

// track last background color displayed
let lastColors = ['rgb(58, 193, 98)',''];

/***
 * 
 * Change background color to something different than the two previous colors.
 * 
 * @param {Array.<String>} colors Set of RGB colors.
***/
function changeColor(colors) { 
  let newColor = '';
  do {
    let i = Math.floor(Math.random() * (colors.length));
    newColor = colors[i]
  } while (lastColors.includes(newColor));

  lastColors.unshift(newColor);
  lastColors.pop();
  document.body.style.background = newColor;

} 

/***
 * 
 * Wrapper function for change background color
***/
function runChangeColor() { 
  changeColor(backColors); 
}     