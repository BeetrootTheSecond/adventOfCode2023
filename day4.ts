import { data, sample } from "./day4Data";

let sampleMode = false;

//console.log(sample);

const currentData = sampleMode ? sample : data;

//console.log(currentData);

interface scratchCard {
  cardNumber: number;
  winningNumbers: number[];
  numbers: number[];
  matchingNumbers: number[];
  points: number;
  copies: number;
}

const scratchCards = currentData.map((rawCard) => {
  let card: scratchCard = {
    cardNumber: 0,
    winningNumbers: [],
    numbers: [],
    matchingNumbers: [],
    points: 0,
    copies: 1,
  };

  let splitData = rawCard.split(":");
  let cardPosition = splitData[0].split(" ");
  card.cardNumber = parseInt(cardPosition[1]);

  let numbers = splitData[1].split(" | ");
  card.winningNumbers = numbers[0]
    .trim()
    .split(" ")
    .map((number) => parseInt(number))
    .filter((number) => !isNaN(number));

  card.numbers = numbers[1]
    .trim()
    .split(" ")
    .map((number) => parseInt(number))
    .filter((number) => !isNaN(number));

  card.matchingNumbers = card.numbers.filter((number) =>
    card.winningNumbers.includes(number)
  );

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

//star Two
//work out copies
scratchCards.forEach((scratchCard, scIndex) => {
  for (let indexCopies = 0; indexCopies < scratchCard.copies; indexCopies++) {
    for (let index = 0; index < scratchCard.matchingNumbers.length; index++) {
      scratchCards[scIndex + 1 + index].copies++;
    }
  }
});

//console.log(scratchCards);

let starTwo = scratchCards.reduce((sum, card) => {
  sum += card.copies;
  return sum;
}, 0);

console.log(`Star Two ${starTwo}`);
