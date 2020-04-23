const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");

function generateIpsum(event) {
  //Grab the selected text length
  const textLength = document.querySelector('input[name="text-length"]:checked')
    .value;

  //Grab the selected musician
  const musician = document.querySelector('input[name="musician-selection"]:checked').value;

  /*Standalone alone callback function to be passed in to the .filter() method.
   *  Usually I do these methods inline like:
   *    - quotes.filter(item => item.musician === musician)
   *    But I decided to split it out to be more explicit. (pure function)
   * */
  const filterByArtist = (item) => item.musician === musician;
  const filteredData = quotes.filter(filterByArtist);

  let minWordCount = 0;
  if (textLength === "short") minWordCount = 50;
  if (textLength === "medium") minWordCount = 150;
  if (textLength === "long") minWordCount = 300;

  /*This reduce loops through the randomized data and keeps a tally of the wordCount along with the
   *   quote so that it can ensure that it generates ipsum of the chosen length*/
  let allText = shuffle(filteredData).reduce(
    function (acc, currentValue) {
      if (acc.wordCount <= minWordCount) {
        acc.ipsum += currentValue.quote + " ";
        acc.wordCount += currentValue.quote.split(" ").length;
      }
      return acc;
    },
    { ipsum: "", wordCount: 0 }
  );

  displayGeneratedContent(allText.ipsum);
}

function displayGeneratedContent(ipsum) {
  let ipsumContainer = document.querySelector(".ipsum-container");

  //Only want to go through the process of creating a new div and such if the ipsum-container
  //is not in the DOM. Once it's there we just need to keep updating the innerText
  if (!ipsumContainer) {
    ipsumContainer = document.createElement("div"); //create element
    ipsumContainer.className = "ipsum-container"; //add class

    document.querySelector("section").appendChild(ipsumContainer); //Add div to the DOM
    copyBtn.removeAttribute("disabled"); //make the copy button clickable now that there's ipsum text
  }

  ipsumContainer.innerText = ipsum; //add ipsum text
}

/*Randomizes the order of the values of an array, returning a new array.
   Use the Fisher-Yates algorithm to reorder the elements of the array.
*/
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

/*
  Copies text to the clipboard.
   - We have to create a temporary <textarea> because I think we can only use the execCommand("copy")
   on <input> or <textarea>
   Resources:
     -https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
     - https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard#Writing_to_the_clipboard
* */
function copy() {
  const ipsumContainer = document.querySelector(".ipsum-container");
  const textarea = document.createElement("textarea");

  textarea.value = ipsumContainer.innerText;
  document.body.appendChild(textarea);
  textarea.select(); //select the text
  document.execCommand("copy"); // Copy the text inside the textarea
  textarea.remove();

  const tooltip = document.querySelector(".tooltip-text");
  tooltip.style.display = "block"; //display tooltip

  //Hide the tooltip after a short delay
  setTimeout(function () {
    tooltip.style.display = "none";
  }, 1000);
}

generateBtn.addEventListener("click", generateIpsum);
copyBtn.addEventListener("click", copy);