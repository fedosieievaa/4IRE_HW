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
        const convertUAHtoUSD = enterAmount / 26.30;
        alert('Amount: ' + convertUAHtoUSD.toFixed(2) + ' USD');
    }
    if (exchangeFrom === 'uah' && exchangeTo === 'eur') {
        const convertUAHtoEUR = enterAmount / 30.46;
        alert('Amount: ' + convertUAHtoEUR.toFixed(2) + ' EUR');
    }
    if (exchangeFrom === 'uah' && exchangeTo === 'cad') {
        const convertUAHtoCAD = enterAmount / 21.20;
        alert('Amount: ' + convertUAHtoCAD.toFixed(2) + ' CAD');
    }
    if (exchangeFrom === 'uah' && exchangeTo === 'gbp') {
        const convertUAHtoGBP = enterAmount / 35.81;
        alert('Amount: ' + convertUAHtoGBP.toFixed(2) + ' GBP');
    }
    if (exchangeFrom === 'usd' && exchangeTo === 'uah') {
        const convertUSDtoUAH = enterAmount * 26.30;
        alert('Amount: ' + convertUSDtoUAH.toFixed(2) + ' UAH');
    }
    if (exchangeFrom === 'usd' && exchangeTo === 'eur') {
        const convertUSDtoEUR = enterAmount * 0.86;
        alert('Amount: ' + convertUSDtoEUR.toFixed(2) + ' EUR');
    }
    if (exchangeFrom === 'usd' && exchangeTo === 'cad') {
        const convertUSDtoCAD = enterAmount * 1.24;
        alert('Amount: ' + convertUSDtoCAD.toFixed(2) + ' CAD');
    }
    if (exchangeFrom === 'usd' && exchangeTo === 'gbp') {
        const convertUSDtoGBP = enterAmount * 0.73;
        alert('Amount: ' + convertUSDtoGBP.toFixed(2) + ' GBP');
    }
    if (exchangeFrom === 'eur' && exchangeTo === 'uah') {
        const convertEURtoUAH = enterAmount * 30.46;
        alert('Amount: ' + convertEURtoUAH.toFixed(2) + ' UAH');
    }
    if (exchangeFrom === 'eur' && exchangeTo === 'usd') {
        const convertEURtoUSD = enterAmount * 1.16;
        alert('Amount: ' + convertEURtoUSD.toFixed(2) + ' USD');
    }
    if (exchangeFrom === 'eur' && exchangeTo === 'cad') {
        const convertEURtoCAD = enterAmount * 1.44;
        alert('Amount: ' + convertEURtoCAD.toFixed(2) + ' CAD');
    }
    if (exchangeFrom === 'eur' && exchangeTo === 'gbp') {
        const convertEURtoGBP = enterAmount * 0.85;
        alert('Amount: ' + convertEURtoGBP.toFixed(2) + ' GBP');
    }
    if (exchangeFrom === 'cad' && exchangeTo === 'uah') {
        const convertCADtoUAH = enterAmount * 21.21;
        alert('Amount: ' + convertCADtoUAH.toFixed(2) + ' UAH');
    }
    if (exchangeFrom === 'cad' && exchangeTo === 'usd') {
        const convertCADtoUSD = enterAmount * 0.81;
        alert('Amount: ' + convertCADtoUSD.toFixed(2) + ' USD');
    }
    if (exchangeFrom === 'cad' && exchangeTo === 'eur') {
        const convertCADtoEUR = enterAmount * 0.70;
        alert('Amount: ' + convertCADtoEUR.toFixed(2) + ' EUR');
    }
    if (exchangeFrom === 'cad' && exchangeTo === 'gbp') {
        const convertCADtoGBP = enterAmount * 0.59;
        alert('Amount: ' + convertCADtoGBP.toFixed(2) + ' GBP');
    }
    if (exchangeFrom === 'gbp' && exchangeTo === 'uah') {
        const convertGBPtoUAH = enterAmount * 35.80;
        alert('Amount: ' + convertGBPtoUAH.toFixed(2) + ' UAH');
    }
    if (exchangeFrom === 'gbp' && exchangeTo === 'usd') {
        const convertGBPtoUSD = enterAmount * 1.36;
        alert('Amount: ' + convertGBPtoUSD.toFixed(2) + ' USD');
    }
    if (exchangeFrom === 'gbp' && exchangeTo === 'eur') {
        const convertGBPtoEUR = enterAmount * 1.18;
        alert('Amount: ' + convertGBPtoEUR.toFixed(2) + ' EUR');
    }
    if (exchangeFrom === 'gbp' && exchangeTo === 'cad') {
        const convertGBPtoCAD = enterAmount * 1.69;
        alert('Amount: ' + convertGBPtoCAD.toFixed(2) + ' CAD');
    }
    convertAgain = confirm('Do you want to convert currency again?')
} while (convertAgain)

alert('Okey, thank you!')