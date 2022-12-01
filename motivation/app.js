const url = `https://api.quotable.io/random`;

let quote1 = document.getElementById('quote');
let author1 = document.getElementById('author');
let category1 = document.getElementById('category');


async function fetchQuote() {

    
    const response = await fetch(url);
    const data = await response.json();
    const quote = await data.content;
    const author = await data.author;
    const category = await data.tags;

    // console.log(author);
    // console.log(quote);
    // console.log(category);

    displayQuote(quote, author, category);
    
};

const displayQuote = (quote, author, category) =>{
    // console.log(author);
    // console.log(quote);
    // console.log(category);

    quote1.innerText = quote;
    author1.innerHTML = author;
    category1.innerHTML = category;
}
    
// window.addEventListener("load", displayQuote);
fetchQuote();

// button.addEventListener("click", fetchQuote)
