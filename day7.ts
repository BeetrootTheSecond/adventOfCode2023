import { data, sample } from "./day7Data";

let sampleMode = false;
const currentData = sampleMode ? sample : data;


//parse Hands 
enum handtype {
    fiveOfAKind,
    fourOfAKind,
    fullHouse,
    threeOfAKind,
    twoPair,
    onePair,
    highCard
}

interface hand {
    cards: string[],
    bid: number,
    handType: handtype,
    rank: number
}
const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
    arr.reduce((groups, item) => {
        (groups[key(item)] ||= []).push(item);
        return groups;
    }, {} as Record<K, T[]>);

function calculateHandType(cards: string[]): handtype {
    let cardGroups = groupBy(cards, i => i);
    let cardGroupKeys = Object.keys(cardGroups);

    if (Object.keys(cardGroups).length == 5) {
        return handtype.highCard;
    }
    if (Object.keys(cardGroups).length == 4) {
        return handtype.onePair;
    }
    if (Object.keys(cardGroups).length == 3) {
        if (cardGroups[cardGroupKeys[0]].length == 3 || cardGroups[cardGroupKeys[1]].length == 3 || cardGroups[cardGroupKeys[2]].length == 3) {
            return handtype.threeOfAKind;
        }
        return handtype.twoPair;
    }
    if (Object.keys(cardGroups).length == 2) {

        if (cardGroups[cardGroupKeys[0]].length == 4 || cardGroups[cardGroupKeys[1]].length == 4) {
            return handtype.fourOfAKind;
        }
        return handtype.fullHouse;
    }

    return handtype.fiveOfAKind;
}

function convertCardToNumber(card: string) {

    if (card == 'T') {
        return 10;
    }
    if (card == 'J') {
        return 11;
    }
    if (card == 'Q') {
        return 12;
    }
    if (card == 'K') {
        return 13;
    }
    if (card == 'A') {
        return 14;
    }
    return parseInt(card);
}

let hands = currentData.split('\n').map(rawHand => {

    let splitHand = rawHand.split(' ');
    let cards = splitHand[0].split('');
    let processHand: hand = {
        cards,
        bid: parseInt(splitHand[1]),
        handType: calculateHandType(cards),
        rank: 0
    }
    return processHand;
})


let orderedHands = hands.sort((aHand, bHand) => {
    if (aHand.handType < bHand.handType) {
        return 1;
    }

    if (aHand.handType > bHand.handType) {
        return -1;
    }

    if (aHand.handType == bHand.handType) {
        for (let index = 0; index < 5; index++) {
            let aCard = convertCardToNumber(aHand.cards[index]);
            let bCard = convertCardToNumber(bHand.cards[index]);
            if (aCard == bCard) {
                continue;
            }
            if (aCard > bCard) {
                return 1;
            }
            return -1;

        }
    }

    return 1;
})

let starOne = 0;
//set Ranks
orderedHands.forEach((hand, handIndex) => {
    orderedHands[handIndex].rank = handIndex + 1;
    let score = orderedHands[handIndex].bid * orderedHands[handIndex].rank;
    starOne += score;
})



//console.log(orderedHands);
console.log(`Star One ${starOne}`);

