
let quote;

const quoteContainer = document.querySelector("#quote-container");
const quoteEl = document.querySelector("#quote");
const authorEl = document.querySelector("#author");
const twiiterBtn = document.querySelector("#twitter")
const newQuoteBtn = document.querySelector("#new-quote");
const spinner = document.querySelector("#spinner");

const showQoute= ({content,author})=>{
    showSpinner();
    if(content.length>100){
        quoteEl.classList.add('long-quote');
    }
    else{

        quoteEl.classList.remove('long-quote');
    }
    //Set Quote, Hide Spinner
    quoteEl.textContent = content;
    authorEl.textContent = `- ${author}`;
    hideSpinner();


}

const getRandomQuotes = async () => {
    const API_URL = 'https://api.quotable.io/quotes/random';
    try{
        showSpinner();
        response = await fetch(API_URL);
         quote = await response.json();
         showQoute(quote[0]);
        }
        
    catch(err){
        quoteEl.textContent = "Failed to load quote.";
        authorEl.textContent = "";
    }
}

const tweetQuotes = () =>{
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteEl.textContent}%0A${authorEl.textContent}`;
    window.open(tweetUrl, '_blank');
}

/*Show and Hide Spinner*/

const showSpinner = () =>{

    spinner.hidden = false;
    quoteContainer.hidden = true;
}

const hideSpinner = ()=>{
    spinner.hidden = true;;
    quoteContainer.hidden =false;
    
}

//Event Listener
newQuoteBtn.addEventListener('click',getRandomQuotes);
twiiterBtn.addEventListener('click',tweetQuotes);
getRandomQuotes();

