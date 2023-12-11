import { data, sample } from "./day9Data";

let sampleMode = false;
const currentData = sampleMode ? sample : data;


let Data = currentData.split('\n').map(line => line.split(' ').map(cell => parseInt(cell)));


//console.table(Data);

function findSequenceDifferences(sequence: number[]) {
    let differences: number[] = [];

    for (let index = 0; index < sequence.length - 1; index++) {
        differences.push(sequence[index + 1] - sequence[index]);
    }

    return differences;

}


let nextNumberInSequence = Data.map(line => {
    console.log(line);

    let stepDifferences: number[][] = [line];
    //function to find between sequence; 
    while (!stepDifferences[0].every(x => x == 0)) {
        let nextLevel = findSequenceDifferences(stepDifferences[0]);
        stepDifferences.unshift(nextLevel);
        console.log(nextLevel);
    }

    console.log('Found Zero');

    //find next number in sequence
    for (let index = 0; index < stepDifferences.length; index++) {
        let lineLength = stepDifferences[index].length;
        let prevousStep = 0;
        if (index != 0) {
            prevousStep = stepDifferences[index - 1][stepDifferences[index - 1].length - 1];
        }

        //let prevousStep = stepDifferences[index - 1][stepDifferences[index - 1].length] || 0;
        stepDifferences[index].push(stepDifferences[index][lineLength - 1] + prevousStep);
        console.log(stepDifferences[index]);
    }

    let nextNumber = stepDifferences[stepDifferences.length - 1][stepDifferences[stepDifferences.length - 1].length - 1];

    return nextNumber;

})


let starOne = nextNumberInSequence.reduce((total, value) => (total + value));

console.log(`StarOne ${starOne}`);