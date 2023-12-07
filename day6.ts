import { data, sample } from "./day6Data";

let sampleMode = false;
const currentData = sampleMode ? sample : data;


let rawData = currentData.split('\n');

let times = rawData[0].split(':')[1].trim().split(' ').filter(cell => cell != '').map(times => parseInt(times));
let distances = rawData[1].split(':')[1].trim().split(' ').filter(cell => cell != '').map(dist => parseInt(dist));


let timesStarTwo = [parseInt(times.reduce((newNumber, time) => { return `${newNumber}${time}`; }, ''))];
let distancesStarTwo = [parseInt(distances.reduce((newNumber, distance) => { return `${newNumber}${distance}`; }, ''))];

//console.log(times);
//console.log(distances);

function calculatepossibleWins(times: number[], distances: number[]) {

    return times.map((time, raceIndex) => {
        let possibleWin = 0;
        for (let index = 0; index < time; index++) {
            let travelDistance = (time - index) * index;
            if (travelDistance > distances[raceIndex]) {
                possibleWin++;
            }

        }

        return possibleWin;
    })
}

let starOneWins = calculatepossibleWins(times, distances)
//console.log(possibleWins);


let starOne = starOneWins.reduce((total, wins) => total * wins);

console.log(`Star One ${starOne}`);


let starTwoWins = calculatepossibleWins(timesStarTwo, distancesStarTwo);
//console.log(possibleWins);


let starTwo = starTwoWins.reduce((total, wins) => total * wins);

console.log(`Star Two ${starTwo}`);