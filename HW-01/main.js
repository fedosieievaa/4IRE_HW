const UAH = 1;
const USD = 26.30;
const EUR = 30.46;
const CAD = 21.20;
const GBP = 35.81;

let convertAgain;
do {
    let exchangeFrom;
    do {
        exchangeFrom = prompt('Please, enter the currency you want to exchange from (UAH, USD, EUR, CAD, GBP):').toLowerCase();
    } while (exchangeFrom !== 'uah' && exchangeFrom !== 'usd' && exchangeFrom !== 'eur' && exchangeFrom !== 'cad' && exchangeFrom !== 'gbp')
    let enterAmount;
    do {
        enterAmount = +prompt('Enter the amount of money:');
    } while (Number(enterAmount) !== enterAmount)
    let exchangeTo;
    do {
        exchangeTo = prompt('Now, enter the currency you want to exchange to (UAH, USD, EUR, CAD, GBP):').toLowerCase();
    } while (exchangeFrom !== 'uah' && exchangeFrom !== 'usd' && exchangeFrom !== 'eur' && exchangeFrom !== 'cad' && exchangeFrom !== 'gbp')

    if (exchangeFrom === 'uah' && exchangeTo === 'usd') {
        alert('Amount: ' + (enterAmount * UAH / USD).toFixed(2) + ' USD');
    } else if (exchangeFrom === 'uah' && exchangeTo === 'eur') {
        alert('Amount: ' + (enterAmount * UAH / EUR).toFixed(2) + ' EUR');
    } else if (exchangeFrom === 'uah' && exchangeTo === 'cad') {
        alert('Amount: ' + (enterAmount * UAH / CAD).toFixed(2) + ' CAD');
    } else if (exchangeFrom === 'uah' && exchangeTo === 'gbp') {
        alert('Amount: ' + (enterAmount * UAH / GBP).toFixed(2) + ' GBP');
    } else if (exchangeFrom === 'usd' && exchangeTo === 'uah') {
        alert('Amount: ' + (enterAmount * USD / UAH).toFixed(2) + ' UAH');
    } else if (exchangeFrom === 'usd' && exchangeTo === 'eur') {
        alert('Amount: ' + (enterAmount * USD / EUR).toFixed(2) + ' EUR');
    } else if (exchangeFrom === 'usd' && exchangeTo === 'cad') {
        alert('Amount: ' + (enterAmount * USD / CAD).toFixed(2) + ' CAD');
    } else if (exchangeFrom === 'usd' && exchangeTo === 'gbp') {
        alert('Amount: ' + (enterAmount * USD / GBP).toFixed(2) + ' GBP');
    } else if (exchangeFrom === 'eur' && exchangeTo === 'uah') {
        alert('Amount: ' + (enterAmount * EUR / UAH).toFixed(2) + ' UAH');
    } else if (exchangeFrom === 'eur' && exchangeTo === 'usd') {
        alert('Amount: ' + (enterAmount * EUR / USD).toFixed(2) + ' USD');
    } else if (exchangeFrom === 'eur' && exchangeTo === 'cad') {
        alert('Amount: ' + (enterAmount * EUR / CAD).toFixed(2) + ' CAD');
    } else if (exchangeFrom === 'eur' && exchangeTo === 'gbp') {
        alert('Amount: ' + (enterAmount * EUR / GBP).toFixed(2) + ' GBP');
    } else if (exchangeFrom === 'cad' && exchangeTo === 'uah') {
        alert('Amount: ' + (enterAmount * CAD / UAH).toFixed(2) + ' UAH');
    } else if (exchangeFrom === 'cad' && exchangeTo === 'usd') {
        alert('Amount: ' + (enterAmount * CAD / USD).toFixed(2) + ' USD');
    } else if (exchangeFrom === 'cad' && exchangeTo === 'eur') {
        alert('Amount: ' + (enterAmount * CAD / EUR).toFixed(2) + ' EUR');
    } else if (exchangeFrom === 'cad' && exchangeTo === 'gbp') {
        alert('Amount: ' + (enterAmount * CAD / GBP).toFixed(2) + ' GBP');
    } else if (exchangeFrom === 'gbp' && exchangeTo === 'uah') {
        alert('Amount: ' + (enterAmount * GBP / UAH).toFixed(2) + ' UAH');
    } else if (exchangeFrom === 'gbp' && exchangeTo === 'usd') {
        alert('Amount: ' + (enterAmount * GBP / USD).toFixed(2) + ' USD');
    } else if (exchangeFrom === 'gbp' && exchangeTo === 'eur') {
        alert('Amount: ' + (enterAmount * GBP / EUR).toFixed(2) + ' EUR');
    } else if (exchangeFrom === 'gbp' && exchangeTo === 'cad') {
        alert('Amount: ' + (enterAmount * GBP / CAD).toFixed(2) + ' CAD');
    }
    convertAgain = confirm('Do you want to convert currency again?')
} while (convertAgain)
alert('Okey, thank you!')