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
    handTypeString: string;
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

function calculateHandType(cards: string[], starTwoMode: boolean = false): handtype {
    let cardGroups = groupBy(cards, i => i);
    let cardGroupKeys = Object.keys(cardGroups);


    if (cardGroupKeys.length == 5) {
        return handtype.highCard;
    }
    if (cardGroupKeys.length == 4) {
        return handtype.onePair;
    }
    if (cardGroupKeys.length == 3) {
        if (cardGroups[cardGroupKeys[0]].length == 3 || cardGroups[cardGroupKeys[1]].length == 3 || cardGroups[cardGroupKeys[2]].length == 3) {
            return handtype.threeOfAKind;
        }
        return handtype.twoPair;
    }
    if (cardGroupKeys.length == 2) {

        if (cardGroups[cardGroupKeys[0]].length == 4 || cardGroups[cardGroupKeys[1]].length == 4) {
            return handtype.fourOfAKind;
        }
        return handtype.fullHouse;
    }

    return handtype.fiveOfAKind;
}

function convertCardToNumber(card: string, starTwoMode: boolean = false) {

    if (card == 'T') {
        return 10;
    }
    if (card == 'J') {
        if (starTwoMode) {
            return 1;
        }
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

    return 0;
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



//star Two 

function starTwoCalulateHandType(cards: string[]) {
    let cardGroups = groupBy(cards, i => i);
    let cardGroupKeys = Object.keys(cardGroups);

    let cardType = calculateHandType(cards);

    if (cardGroupKeys.includes('J')) // look for JOKER
    {
        //how many JOKERS
        if (cardGroupKeys.length == 5) {
            //theres a JOKER so its one pair 
            return handtype.onePair;
        }
        if (cardGroupKeys.length == 4) { // one pair
            //three of a kind
            return handtype.threeOfAKind;
        }
        if (cardGroupKeys.length == 3) { //two pair or three of a kind
            //check how many Jokers
            if (cardGroups['J'].length == 2) {
                return handtype.fourOfAKind;
            }
            if (cardGroups['J'].length == 3) {
                return handtype.fourOfAKind;
            }
            //if (cardGroups['J'].length == 1) {
            if (cardGroups[cardGroupKeys[0]].length == 3 || cardGroups[cardGroupKeys[1]].length == 3 || cardGroups[cardGroupKeys[2]].length == 3) {
                return handtype.fourOfAKind;
            }

            return handtype.fullHouse;
        }
        if (cardGroupKeys.length == 2) {
            // fourOfAKind or full house
            return handtype.fiveOfAKind;
        }
        if (cardGroupKeys.length == 1) {
            //all JOKERS nothing changes
            return handtype.fiveOfAKind;
        }

    }
    return cardType;
}

let starTwoHands = hands.map(hand => {
    hand.handType = starTwoCalulateHandType(hand.cards);
    return hand;
})


let orderedHandsStarTwo = starTwoHands.sort((aHand, bHand) => {
    if (aHand.handType < bHand.handType) {
        return 1;
    }

    if (aHand.handType > bHand.handType) {
        return -1;
    }

    if (aHand.handType == bHand.handType) {
        for (let index = 0; index < 5; index++) {
            let aCard = convertCardToNumber(aHand.cards[index], true);
            let bCard = convertCardToNumber(bHand.cards[index], true);
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

function enumLookup(handTypelookup: handtype) {
    switch (handTypelookup) {
        case handtype.fiveOfAKind: {
            return 'fiveOfAKind';
        }
        case handtype.fourOfAKind: {
            return 'fourOfAKind';
        }
        case handtype.fullHouse: {
            return 'fullHouse';
        }
        case handtype.threeOfAKind: {
            return 'threeOfAKind';
        }
        case handtype.twoPair: {
            return 'twoPair';
        }
        case handtype.onePair: {
            return 'onePair';
        }
        case handtype.highCard: {
            return 'highCard';
        }
    }

}

orderedHandsStarTwo.map(hands => {
    hands.cards = [hands.cards.join(' ')];
    hands.handTypeString = enumLookup(hands.handType)

    return hands;
});
//console.table(orderedHandsStarTwo);

let starTwo = 0;
//set Ranks
orderedHandsStarTwo.forEach((hand, handIndex) => {
    orderedHandsStarTwo[handIndex].rank = handIndex + 1;
    let score = orderedHandsStarTwo[handIndex].bid * orderedHandsStarTwo[handIndex].rank;
    starTwo += score;
})



//console.log(orderedHands);
console.log(`Star Two ${starTwo}`);