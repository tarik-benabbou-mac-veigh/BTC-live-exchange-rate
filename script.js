// Name of each button:
const coursEuro = document.querySelector('#coursEuro');
const coursDollar = document.querySelector('#coursDollar');
const coursLivres = document.querySelector('#coursLivres');

// Name of each result appearing :
const resultatEuro = document.querySelector('#resultatEuro');
const resultatDollar = document.querySelector('#resultatDollar');
const resultatLivres = document.querySelector('#resultatLivres');


coursEuro.addEventListener('click', ()=>{
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur,usd,gbp')
        .then(rep => rep.json())
        .then(data =>{
            const eur = data.bitcoin.eur;
            resultatEuro.innerHTML = `<p> ${eur} €</p>`
        });
});
coursDollar.addEventListener('click', ()=>{
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur,usd,gbp')
        .then(rep => rep.json())
        .then(data =>{
            const usd = data.bitcoin.usd;
            resultatDollar.innerHTML = `<p> ${usd} $</p>`
        });
});
coursLivres.addEventListener('click', ()=>{
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur,usd,gbp')
        .then(rep => rep.json())
        .then(data =>{
            const gbp = data.bitcoin.gbp;
            resultatLivres.innerHTML = `<p> ${gbp} £</p>`
        });
});