import { data, sample } from "./day5Data";

let sampleMode = false;
const currentData = sampleMode ? sample : data;

//parse source string 

let splitData = currentData.split('\n\n');

console.log(splitData);
interface sourceMap {
    destinationRangeStart: number,
    sourceRangeStart: number,
    rangeLength: number
}
interface Almanac {
    seeds: number[],
    seedToSoil: sourceMap[],
    soilToFertilizer: sourceMap[],
    fertilizerToWater: sourceMap[],
    waterToLight: sourceMap[],
    lightToTemperature: sourceMap[],
    temperatureToHumidity: sourceMap[],
    humidityToLocation: sourceMap[],
    [key: string]: any
}

interface seedToLocation {
    seed: number, soil: number, fertilizer: number, water: number, light: number, temperature: number, humidity: number, location: number
}

let seeds = splitData[0].split(': ')[1].split(' ').map(seed => parseInt(seed));

let seedToSoil: sourceMap[] = splitData[1].split(':\n')[1].split('\n').map(row => {
    let splitRow = row.split(' ').map(data => parseInt(data));
    let source: sourceMap = {
        destinationRangeStart: splitRow[0],
        sourceRangeStart: splitRow[1],
        rangeLength: splitRow[2]
    }

    return source;
});
let soilToFertilizer: sourceMap[] = splitData[2].split(':\n')[1].split('\n').map(row => {
    let splitRow = row.split(' ').map(data => parseInt(data));
    let source: sourceMap = {
        destinationRangeStart: splitRow[0],
        sourceRangeStart: splitRow[1],
        rangeLength: splitRow[2]
    }

    return source;
});
let fertilizerToWater: sourceMap[] = splitData[3].split(':\n')[1].split('\n').map(row => {
    let splitRow = row.split(' ').map(data => parseInt(data));
    let source: sourceMap = {
        destinationRangeStart: splitRow[0],
        sourceRangeStart: splitRow[1],
        rangeLength: splitRow[2]
    }

    return source;
});
let waterToLight: sourceMap[] = splitData[4].split(':\n')[1].split('\n').map(row => {
    let splitRow = row.split(' ').map(data => parseInt(data));
    let source: sourceMap = {
        destinationRangeStart: splitRow[0],
        sourceRangeStart: splitRow[1],
        rangeLength: splitRow[2]
    }

    return source;
});
let lightToTemperature: sourceMap[] = splitData[5].split(':\n')[1].split('\n').map(row => {
    let splitRow = row.split(' ').map(data => parseInt(data));
    let source: sourceMap = {
        destinationRangeStart: splitRow[0],
        sourceRangeStart: splitRow[1],
        rangeLength: splitRow[2]
    }

    return source;
});
let temperatureToHumidity: sourceMap[] = splitData[6].split(':\n')[1].split('\n').map(row => {
    let splitRow = row.split(' ').map(data => parseInt(data));
    let source: sourceMap = {
        destinationRangeStart: splitRow[0],
        sourceRangeStart: splitRow[1],
        rangeLength: splitRow[2]
    }

    return source;
});
let humidityToLocation: sourceMap[] = splitData[7].split(':\n')[1].split('\n').map(row => {
    let splitRow = row.split(' ').map(data => parseInt(data));
    let source: sourceMap = {
        destinationRangeStart: splitRow[0],
        sourceRangeStart: splitRow[1],
        rangeLength: splitRow[2]
    }

    return source;
});


let StarOneAlmanacMap: Almanac = {
    seeds,
    seedToSoil,
    soilToFertilizer,
    fertilizerToWater,
    waterToLight,
    lightToTemperature,
    temperatureToHumidity,
    humidityToLocation,
};


//console.log(StarOneAlmanacMap);

// // changes to the normal 

// let toSoilChange: number[] = [];

// StarOneAlmanacMap.seedToSoil.map(changesDetails => {

//     for (let index = 0; index < changesDetails.rangeLength; index++) {
//         toSoilChange[changesDetails.sourceRangeStart + index] = (changesDetails.destinationRangeStart + index);

//     }


// })

// let toFertilizerChange: number[] = [];

// StarOneAlmanacMap.soilToFertilizer.map(changesDetails => {

//     for (let index = 0; index < changesDetails.rangeLength; index++) {
//         toFertilizerChange[changesDetails.sourceRangeStart + index] = (changesDetails.destinationRangeStart + index);

//     }


// })

// let toWaterChange: number[] = [];

// StarOneAlmanacMap.fertilizerToWater.map(changesDetails => {

//     for (let index = 0; index < changesDetails.rangeLength; index++) {
//         toWaterChange[changesDetails.sourceRangeStart + index] = (changesDetails.destinationRangeStart + index);

//     }


// })

// let toLightChange: number[] = [];

// StarOneAlmanacMap.waterToLight.map(changesDetails => {

//     for (let index = 0; index < changesDetails.rangeLength; index++) {
//         toLightChange[changesDetails.sourceRangeStart + index] = (changesDetails.destinationRangeStart + index);

//     }


// })

// let toTemperatureChange: number[] = [];

// StarOneAlmanacMap.lightToTemperature.map(changesDetails => {

//     for (let index = 0; index < changesDetails.rangeLength; index++) {
//         toTemperatureChange[changesDetails.sourceRangeStart + index] = (changesDetails.destinationRangeStart + index);

//     }


// })

// let tohumidityChange: number[] = [];

// StarOneAlmanacMap.temperatureToHumidity.map(changesDetails => {

//     for (let index = 0; index < changesDetails.rangeLength; index++) {
//         tohumidityChange[changesDetails.sourceRangeStart + index] = (changesDetails.destinationRangeStart + index);

//     }
// })

// let toLocationChange: number[] = [];

// StarOneAlmanacMap.humidityToLocation.map(changesDetails => {
//     for (let index = 0; index < changesDetails.rangeLength; index++) {
//         toLocationChange[changesDetails.sourceRangeStart + index] = (changesDetails.destinationRangeStart + index);
//     }
// })


//console.log(toSoilChange);

// work out for each seed; 

function AlmanacChangeLookup(typeNumber: number, changeLookup: string) {
    let currentlookup: sourceMap[] = StarOneAlmanacMap[changeLookup];
    let newValue = typeNumber;

    for (let index = 0; index < currentlookup.length; index++) {
        const element = currentlookup[index];

        if (typeNumber >= element.sourceRangeStart && typeNumber <= (element.sourceRangeStart + element.rangeLength)) {
            let calculateChange = element.destinationRangeStart - element.sourceRangeStart;

            newValue = typeNumber + calculateChange;
            break;
        }


    }

    return newValue;

}

let seedToLocationsStarOne: seedToLocation[] = StarOneAlmanacMap.seeds.map(seed => {

    let soil = AlmanacChangeLookup(seed, "seedToSoil");
    let fertilizer = AlmanacChangeLookup(soil, "soilToFertilizer");
    let water = AlmanacChangeLookup(fertilizer, "fertilizerToWater");
    let light = AlmanacChangeLookup(water, "waterToLight");
    let temperature = AlmanacChangeLookup(light, "lightToTemperature");
    let humidity = AlmanacChangeLookup(temperature, "temperatureToHumidity");
    let location = AlmanacChangeLookup(humidity, "humidityToLocation");

    let journey: seedToLocation = {
        seed: seed,
        soil,
        fertilizer,
        water,
        light,
        temperature,
        humidity,
        location
    }
    return journey;
})

// find lowest 
let starOne = seedToLocationsStarOne.reduce((currentLowest, seedJourney) => {
    if (currentLowest.location < seedJourney.location) {
        return currentLowest;
    }
    return seedJourney;
})

console.log(` Star One ${starOne.location}`);


// Star Two 

function FindSeedLocation(seed: number) {
    let soil = AlmanacChangeLookup(seed, "seedToSoil");
    let fertilizer = AlmanacChangeLookup(soil, "soilToFertilizer");
    let water = AlmanacChangeLookup(fertilizer, "fertilizerToWater");
    let light = AlmanacChangeLookup(water, "waterToLight");
    let temperature = AlmanacChangeLookup(light, "lightToTemperature");
    let humidity = AlmanacChangeLookup(temperature, "temperatureToHumidity");
    let location = AlmanacChangeLookup(humidity, "humidityToLocation");

    let journey: seedToLocation = {
        seed: seed,
        soil,
        fertilizer,
        water,
        light,
        temperature,
        humidity,
        location
    }
    return journey;

}

let StarTwoAlmanacMap = StarOneAlmanacMap;

let Seeds = StarTwoAlmanacMap.seeds;
StarTwoAlmanacMap.seeds = [];

let closestLocation: number = 0;

for (let index = 0; index < Seeds.length; index++) {
    const startOfRange = Seeds[index];
    const Range = Seeds[index + 1];

    for (let rangeIndex = 0; rangeIndex < Range; rangeIndex++) {
        let seedLocation = FindSeedLocation(startOfRange + rangeIndex);
        if (closestLocation == 0) {
            closestLocation = seedLocation.location
        }

        if (seedLocation.location < closestLocation) {
            closestLocation = seedLocation.location
        }

    }
    index++;
}


// find lowest 

console.log(` Star Two ${closestLocation}`);