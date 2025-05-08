// Name of each button:
const coursEuro = document.querySelector('#coursEuro');
const coursDollar = document.querySelector('#coursDollar');
const coursLivres = document.querySelector('#coursLivres');

// Name of each result appearing :
const resultatEuro = document.querySelector('#resultatEuro');
const resultatDollar = document.querySelector('#resultatDollar');
const resultatLivres = document.querySelector('#resultatLivres');

// Function to be used for each currency (refactoring method):
const API_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur,usd,gbp';

function fetchAndDisplay(currency, resultElement, symbol) {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const value = data.bitcoin[currency];
            resultElement.innerHTML = `<p>${value} ${symbol}</p>`;
        });
}
// Euros €
coursEuro.addEventListener('click', () => {
    fetchAndDisplay('eur', resultatEuro, '€');
});
// Dollar $
coursDollar.addEventListener('click', () => {
    fetchAndDisplay('usd', resultatDollar, '$');
});
// Pound £
coursLivres.addEventListener('click', () => {
    fetchAndDisplay('gbp', resultatLivres, '£');
});
