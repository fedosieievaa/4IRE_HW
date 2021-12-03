const maxStationQuant = 3;
const maxStationPower = 100;
const maxPanelsQuant = 30;
const maxPanelsPower = 100;
const maxBuildingsQuant = 600;
const maxApartmentsQuant = 400;

const getEnergy = (max, quant) => {
    const quantity = Math.ceil(Math.random() * max);
    let totalEnergy = 0;
    for (let i = 0; i < quantity; i++) {
        totalEnergy += Math.ceil(Math.random() * quant);
    }
    return totalEnergy;
}

const stationsEnergy = getEnergy(maxStationQuant, maxStationPower) * 1000;
const panelsEnergy = getEnergy(maxPanelsQuant, maxPanelsPower) * 1000;
const consumedEnergy = getEnergy(maxBuildingsQuant, maxApartmentsQuant);

const getPowerLinesEnergy = () => {
    const maxQuant = 15;
    const powerLinesQuant = Math.ceil(Math.random() * maxQuant);
    const allPowerLines = [];
    const maxPower = 100;
    const minPrice = 1.5;
    const maxPrice = 2;
    for (let i = 0; i < powerLinesQuant; i++) {
        allPowerLines.push({ power: (Math.ceil(Math.random() * maxPower)) * 1000, price: (minPrice + Math.random() * (maxPrice - minPrice)).toFixed(2) });
    }
    return allPowerLines;
}

const powerLinesEnergy = getPowerLinesEnergy();

const calculateRemainder = (energy, lines) => {
    let result = 0;
    if (energy < 0) {
        lines.sort((a, b) => a.price - b.price);
    } else {
        lines.sort((a, b) => b.price - a.price);
    }
    energy = Math.abs(energy);
    for (let i = 0; i < lines.length; i++) {
        if (energy > lines[i].power) {
            result += lines[i].power * lines[i].price;
            energy -= lines[i].power;
        }
        if (energy < lines[i].power) {
            result += energy * lines[i].price;
            return result.toFixed(2);
        }
    }
    return -energy;
}

const day = (stationsEnergy / 2) + panelsEnergy - (consumedEnergy * 4);
const night = (stationsEnergy / 2) - consumedEnergy;
const remainDay = calculateRemainder(day, powerLinesEnergy);
const remainNight = calculateRemainder(night, powerLinesEnergy);

const getBalance = (time, remainder) => {
    if (remainder < 0) {
        console.log(`We ${Math.sign(time) === -1 ? 'bought': 'sold'} ${Math.abs(time-Math.abs(remainder))} KW and ${Math.sign(time) === -1 ? 'spent': 'earned'} ${powerLinesEnergy.map((obj) => obj.power * obj.price).reduce((a, b) => a + b)} UAH`);
        console.error(`Power lines didn't have enough power, we didn't ${Math.sign(time) === -1 ? 'buy': 'sell'} ${Math.abs(remainder)} KW`);
    } else {
        console.log(`We ${Math.sign(time) === -1 ? 'bought': 'sold'} ${Math.abs(time)} KW and ${Math.sign(time) === -1 ? 'spent': 'earned'} ${remainder} UAH`);

    }
}

console.group(`DAY:`);
getBalance(day, remainDay);
console.groupEnd();

console.group(`NIGHT:`);
getBalance(night, remainNight);
console.groupEnd();