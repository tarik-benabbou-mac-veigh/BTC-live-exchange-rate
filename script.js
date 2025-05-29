// Name of each button BTC :
const coursEuro = document.querySelector('#coursEuro');
const coursDollar = document.querySelector('#coursDollar');
const coursLivres = document.querySelector('#coursLivres');
// Name of each button ETH :
const coursEuroEth = document.querySelector('#coursEuroEth');
const coursDollarEth = document.querySelector('#coursDollarEth');
const coursLivresEth = document.querySelector('#coursLivresEth');
// Name of each button ADA :
const coursEuroAda = document.querySelector('#coursEuroAda');
const coursDollarAda = document.querySelector('#coursDollarAda');
const coursLivresAda = document.querySelector('#coursLivresAda');
// Name of BTC token button :
const tokenBtc = document.querySelector('#tokenBtc');


// Name of each result appearing for BTC :
const resultatEuro = document.querySelector('#resultatEuro');
const resultatDollar = document.querySelector('#resultatDollar');
const resultatLivres = document.querySelector('#resultatLivres');
// Name of each result appearing for ETH :
const resultatEuroEth = document.querySelector('#resultatEuroEth');
const resultatDollarEth = document.querySelector('#resultatDollarEth');
const resultatLivresEth = document.querySelector('#resultatLivresEth');
// Name of each result appearing for ADA :
const resultatEuroAda = document.querySelector('#resultatEuroAda');
const resultatDollarAda = document.querySelector('#resultatDollarAda');
const resultatLivresAda = document.querySelector('#resultatLivresAda');

// Name of the result token BTC :
const resultatTokenBtc = document.querySelector('#resultatTokenBtc');


// Links for API BTC, ETH, and ADA : 
const API_URL_BTC = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur,usd,gbp';
const API_URL_ETH_ADA = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,cardano&vs_currencies=eur,usd,gbp';
// Links for the amount of Tokens : 
const API_TOKEN_BTC = 'https://api.coingecko.com/api/v3/coins/bitcoin';

// Function to be used for each currency BTC (refactoring method) :
function fetchAndDisplayBtc(currency, resultElement, symbol) {
    fetch(API_URL_BTC)
        .then(res => res.json())
        .then(data => {
            const value = data.bitcoin[currency];
            resultElement.innerHTML = `<p>${value} ${symbol}</p>`;
        });
};
// Euros € BTC :
coursEuro.addEventListener('click', () => {
    fetchAndDisplayBtc('eur', resultatEuro, '€');
});
// Dollar $ BTC :
coursDollar.addEventListener('click', () => {
    fetchAndDisplayBtc('usd', resultatDollar, '$');
});
// Pound £ BTC :
coursLivres.addEventListener('click', () => {
    fetchAndDisplayBtc('gbp', resultatLivres, '£');
});

// Function to be used for each currency ETH (refactoring method) :
function fetchAndDisplayEth(currency, resultElement, symbol) {
    fetch(API_URL_ETH_ADA)
        .then(res => res.json())
        .then(data => {
            const value = data.ethereum[currency];
            resultElement.innerHTML = `<p>${value} ${symbol}</p>`;
        });
};
// Euros € ETH :
coursEuroEth.addEventListener('click', () => {
    fetchAndDisplayEth('eur', resultatEuroEth, '€');
});
// Dollar $ ETH :
coursDollarEth.addEventListener('click', () => {
    fetchAndDisplayEth('usd', resultatDollarEth, '$');
});
// Pound £ ETH :
coursLivresEth.addEventListener('click', () => {
    fetchAndDisplayEth('gbp', resultatLivresEth, '£');
});

// Function to be used for each currency ADA (refactoring method) :
function fetchAndDisplayAda(currency, resultElement, symbol) {
    fetch(API_URL_ETH_ADA)
        .then(res => res.json())
        .then(data => {
            const value = data.cardano[currency];
            resultElement.innerHTML = `<p>${value} ${symbol}</p>`;
        });
};
// Euros € ADA :
coursEuroAda.addEventListener('click', () => {
    fetchAndDisplayAda('eur', resultatEuroAda, '€');
});
// Dollar $ ADA :
coursDollarAda.addEventListener('click', () => {
    fetchAndDisplayAda('usd', resultatDollarAda, '$');
});
// Pound £ ADA :
coursLivresAda.addEventListener('click', () => {
    fetchAndDisplayAda('gbp', resultatLivresAda, '£');
});


// Function for BTC token :
function fetchTokenBtc(resultElement){
    fetch(API_TOKEN_BTC)
        .then(res =>res.json())
        .then(data =>{
            const value = data.market_data.circulating_supply;
            resultElement.innerHTML = `<p>${value} tokens en circulations</p>`;
        });
};

tokenBtc.addEventListener('click', ()=>{
    fetchTokenBtc(resultatTokenBtc);
});
