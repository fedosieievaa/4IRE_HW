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
        const convertUAHtoUSD = enterAmount * UAH / USD;
        alert('Amount: ' + convertUAHtoUSD.toFixed(2) + ' USD');
    }
    if (exchangeFrom === 'uah' && exchangeTo === 'eur') {
        const convertUAHtoEUR = enterAmount * UAH / EUR;
        alert('Amount: ' + convertUAHtoEUR.toFixed(2) + ' EUR');
    }
    if (exchangeFrom === 'uah' && exchangeTo === 'cad') {
        const convertUAHtoCAD = enterAmount * UAH / CAD;
        alert('Amount: ' + convertUAHtoCAD.toFixed(2) + ' CAD');
    }
    if (exchangeFrom === 'uah' && exchangeTo === 'gbp') {
        const convertUAHtoGBP = enterAmount * UAH / GBP;
        alert('Amount: ' + convertUAHtoGBP.toFixed(2) + ' GBP');
    }
    if (exchangeFrom === 'usd' && exchangeTo === 'uah') {
        const convertUSDtoUAH = enterAmount * USD / UAH;
        alert('Amount: ' + convertUSDtoUAH.toFixed(2) + ' UAH');
    }
    if (exchangeFrom === 'usd' && exchangeTo === 'eur') {
        const convertUSDtoEUR = enterAmount * USD / EUR;
        alert('Amount: ' + convertUSDtoEUR.toFixed(2) + ' EUR');
    }
    if (exchangeFrom === 'usd' && exchangeTo === 'cad') {
        const convertUSDtoCAD = enterAmount * USD / CAD;
        alert('Amount: ' + convertUSDtoCAD.toFixed(2) + ' CAD');
    }
    if (exchangeFrom === 'usd' && exchangeTo === 'gbp') {
        const convertUSDtoGBP = enterAmount * USD / GBP;
        alert('Amount: ' + convertUSDtoGBP.toFixed(2) + ' GBP');
    }
    if (exchangeFrom === 'eur' && exchangeTo === 'uah') {
        const convertEURtoUAH = enterAmount * EUR / UAH;
        alert('Amount: ' + convertEURtoUAH.toFixed(2) + ' UAH');
    }
    if (exchangeFrom === 'eur' && exchangeTo === 'usd') {
        const convertEURtoUSD = enterAmount * EUR / USD;
        alert('Amount: ' + convertEURtoUSD.toFixed(2) + ' USD');
    }
    if (exchangeFrom === 'eur' && exchangeTo === 'cad') {
        const convertEURtoCAD = enterAmount * EUR / CAD;
        alert('Amount: ' + convertEURtoCAD.toFixed(2) + ' CAD');
    }
    if (exchangeFrom === 'eur' && exchangeTo === 'gbp') {
        const convertEURtoGBP = enterAmount * EUR / GBP;
        alert('Amount: ' + convertEURtoGBP.toFixed(2) + ' GBP');
    }
    if (exchangeFrom === 'cad' && exchangeTo === 'uah') {
        const convertCADtoUAH = enterAmount * CAD / UAH;
        alert('Amount: ' + convertCADtoUAH.toFixed(2) + ' UAH');
    }
    if (exchangeFrom === 'cad' && exchangeTo === 'usd') {
        const convertCADtoUSD = enterAmount * CAD / USD;
        alert('Amount: ' + convertCADtoUSD.toFixed(2) + ' USD');
    }
    if (exchangeFrom === 'cad' && exchangeTo === 'eur') {
        const convertCADtoEUR = enterAmount * CAD / EUR;
        alert('Amount: ' + convertCADtoEUR.toFixed(2) + ' EUR');
    }
    if (exchangeFrom === 'cad' && exchangeTo === 'gbp') {
        const convertCADtoGBP = enterAmount * CAD / GBP;
        alert('Amount: ' + convertCADtoGBP.toFixed(2) + ' GBP');
    }
    if (exchangeFrom === 'gbp' && exchangeTo === 'uah') {
        const convertGBPtoUAH = enterAmount * GBP / UAH;
        alert('Amount: ' + convertGBPtoUAH.toFixed(2) + ' UAH');
    }
    if (exchangeFrom === 'gbp' && exchangeTo === 'usd') {
        const convertGBPtoUSD = enterAmount * GBP / USD;
        alert('Amount: ' + convertGBPtoUSD.toFixed(2) + ' USD');
    }
    if (exchangeFrom === 'gbp' && exchangeTo === 'eur') {
        const convertGBPtoEUR = enterAmount * GBP / EUR;
        alert('Amount: ' + convertGBPtoEUR.toFixed(2) + ' EUR');
    }
    if (exchangeFrom === 'gbp' && exchangeTo === 'cad') {
        const convertGBPtoCAD = enterAmount * GBP / CAD;
        alert('Amount: ' + convertGBPtoCAD.toFixed(2) + ' CAD');
    }
    convertAgain = confirm('Do you want to convert currency again?')
} while (convertAgain)
alert('Okey, thank you!')