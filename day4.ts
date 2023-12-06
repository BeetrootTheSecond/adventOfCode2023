import { data, sample } from "./day4Data";

let sampleMode = true;

//console.log(sample);

const currentData = sampleMode ? sample : data;

//console.log(currentData);

interface scratchCard {
    cardNumber: number,
    winningNumbers: number[]
    numbers: number[]
    matchingNumbers: number[]
    points: number
}

const scratchCards = currentData.map(rawCard => {

    let card: scratchCard = {
        cardNumber: 0,
        winningNumbers: [],
        numbers: [],
        matchingNumbers: [],
        points: 0
    }

    let splitData = rawCard.split(':');
    let cardPosition = splitData[0].split(' ');
    card.cardNumber = parseInt(cardPosition[3]);

    let numbers = splitData[1].split(' | ');
    card.winningNumbers = numbers[0].trim().split(' ').map(number => parseInt(number)).filter(number => !isNaN(number));

    card.numbers = numbers[1].trim().split(' ').map(number => parseInt(number)).filter(number => !isNaN(number));

    card.matchingNumbers = card.numbers.filter(number => card.winningNumbers.includes(number));

    if (card.matchingNumbers.length > 0) {
        card.points = 1;
    }

    for (let index = 1; index < card.matchingNumbers.length; index++) {
        card.points *= 2;
    }
    return card;
});


let starOne = scratchCards.reduce((sum, card) => {
    sum += card.points;
    return sum;
}, 0);

console.log(`Star One ${starOne}`);
