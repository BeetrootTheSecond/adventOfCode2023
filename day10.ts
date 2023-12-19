import { consoleColors } from "./consoleColors";
import { data, sample4 } from "./day10Data";

let sampleMode = true;
const currentData = sampleMode ? sample4 : data;

interface tileType {
    tileChar: string,
    connected: boolean,
    enclosed: number

}

enum move {
    up, right, down, left
}
//function getting coloured output
function createColouredString(pipes: tileType[][]) {
    let outputString = [];
    for (let index = 0; index < pipes.length; index++) {
        const layer = pipes[index];

        for (let indexlayer = 0; indexlayer < layer.length; indexlayer++) {
            const cell = layer[indexlayer];
            if (cell.tileChar == 'S') {
                let newchar = consoleColors.BgRed(cell.tileChar, true);
                outputString.push(newchar);
                continue;
            }
            if (cell.connected) {
                if (cell.tileChar == '-') {
                    let newchar = consoleColors.BgBlue(cell.tileChar, true);
                    outputString.push(newchar);
                    continue;
                }
                if (cell.tileChar == '7') {
                    let newchar = consoleColors.BgBlue(cell.tileChar, true);
                    outputString.push(newchar);
                    continue;
                }
                if (cell.tileChar == 'J') {
                    let newchar = consoleColors.BgBlue(cell.tileChar, true);
                    outputString.push(newchar);
                    continue;
                }
                if (cell.tileChar == 'L') {
                    let newchar = consoleColors.BgBlue(cell.tileChar, true);
                    outputString.push(newchar);
                    continue;
                }
                if (cell.tileChar == '|') {
                    let newchar = consoleColors.BgBlue(cell.tileChar, true);
                    outputString.push(newchar);
                    continue;
                }
                if (cell.tileChar == 'F') {
                    let newchar = consoleColors.BgBlue(cell.tileChar, true);
                    outputString.push(newchar);
                    continue;
                }
            }
            if (cell.enclosed == 1) {
                let newchar = consoleColors.BgYellow(cell.tileChar, true);
                outputString.push(newchar);
                continue;
            }
            if (cell.enclosed == 2) {
                let newchar = consoleColors.BgMagenta(cell.tileChar, true);
                outputString.push(newchar);
                continue;
            }
            if (cell.tileChar == '.') {
                let newchar = consoleColors.BgGreen(cell.tileChar, true);
                outputString.push(newchar);
                continue;
            }
            outputString.push(cell.tileChar);

        }
        outputString.push(`\n`);
    }
    return outputString.join('');
}

//create 2d array 

let pipeArray = currentData.split('\n').map(line => line.split('').map(cell => ({ tileChar: cell, connected: false, enclosed: 0 })));

//console.table(pipeArray);
console.log(createColouredString(pipeArray))

let startingX = 0;
let startingY = 0;
// find starting indexs 'S'
for (let index = 0; index < pipeArray.length; index++) {
    const layer = pipeArray[index];
    for (let indexLayer = 0; indexLayer < layer.length; indexLayer++) {
        const cell = layer[indexLayer];
        if (cell.tileChar == 'S') {
            startingX = index;
            startingY = indexLayer;
            cell.connected = true;
        }
    }
}

console.log(`${startingX}, ${startingY}`);


//follow loop until it returns back to start posistion
let currentX = startingX;
let currentY = startingY;
let lastMove = move.up; // 1 up, 2 right ,3 down, 4 left


//look for next posisition 
if (startingY < pipeArray[startingX].length) {// left is a vaild pipe
    let vaildRightMoves = ['-', '7', 'J'];
    if (vaildRightMoves.includes(pipeArray[startingX][startingY + 1].tileChar)) {
        pipeArray[startingX][startingY + 1].connected = true;
        currentX = startingX;
        currentY = startingY + 1;
        lastMove = move.right;
    }
}
if (startingY > 0) { // right is a vaild pipe
    let vaildLeftMoves = ['-', 'L', 'F'];
    if (vaildLeftMoves.includes(pipeArray[startingX][startingY - 1].tileChar)) {
        pipeArray[startingX][startingY - 1].connected = true;
        currentX = startingX;
        currentY = startingY - 1;
        lastMove = move.left;
    }
}
if (startingX > 0) { // up is a vaild pipe
    let vaildUpMoves = ['|', '7', 'F'];
    if (vaildUpMoves.includes(pipeArray[startingX - 1][startingY].tileChar)) {
        pipeArray[startingX - 1][startingY].connected = true;
        currentX = startingX - 1;
        currentY = startingY;
        lastMove = move.up;
    }

}
if (startingX < 0) { // down is a vaild pipe
    let vaildDownMoves = ['|', 'J', 'L'];
    if (vaildDownMoves.includes(pipeArray[startingX + 1][startingY].tileChar)) {
        pipeArray[startingX + 1][startingY].connected = true;
        currentX = startingX + 1;
        currentY = startingY;
        lastMove = move.down;
    }



}

let loopSize = 1;

console.log(createColouredString(pipeArray));
console.log(`${currentX}, ${currentY}`);
while (currentX != startingX || currentY != startingY) {
    if (loopSize % 100 == 0) {
        console.clear();
        console.log(createColouredString(pipeArray));
    }
    console.log(`${currentX}, ${currentY}`);

    //get current cell
    let currentCell = pipeArray[currentX][currentY].tileChar;
    pipeArray[currentX][currentY].connected = true;
    // find next cell
    if (lastMove == move.up) {
        if (currentCell == '|') {
            currentX = currentX - 1;
        }
        if (currentCell == '7') {
            currentY = currentY - 1;
            lastMove = move.left;
        }
        if (currentCell == 'F') {
            currentY = currentY + 1;
            lastMove = move.right;
        }
    }

    else if (lastMove == move.down) {
        if (currentCell == '|') {
            currentX = currentX + 1;
        }
        if (currentCell == 'J') {
            currentY = currentY - 1;
            lastMove = move.left;
        }
        if (currentCell == 'L') {
            currentY = currentY + 1;
            lastMove = move.right;
        }
    }
    else if (lastMove == move.right) {
        if (currentCell == '-') {
            currentY = currentY + 1;
        }

        if (currentCell == 'J') {
            currentX = currentX - 1;
            lastMove = move.up;
        }
        if (currentCell == '7') {
            currentX = currentX + 1;
            lastMove = move.down;
        }
    }
    else if (lastMove == move.left) {
        if (currentCell == '-') {
            currentY = currentY - 1;
        }
        if (currentCell == 'F') {
            currentX = currentX + 1;
            lastMove = move.down;
        }
        if (currentCell == 'L') {
            currentX = currentX - 1;
            lastMove = move.up;
        }
    }


    //increase count
    loopSize++;
}


console.log(createColouredString(pipeArray));
console.log(`${currentX}, ${currentY}`);
console.log(`LoopSize ${loopSize}`);

console.log(`Star One ${loopSize / 2}`);
//its not 6603
// its 6613

//star Two 

let pipeJumps = 0;
let enclosedCells = 0;
let Connected = false;
let wholePipe = false;
for (let index = 0; index < pipeArray.length; index++) {
    const layer = pipeArray[index];
    for (let indexLayer = 0; indexLayer < layer.length; indexLayer++) {
        const cell = layer[indexLayer];
        if (cell.connected) {
            //check if joint
            if (cell.tileChar == '|') {
                wholePipe = true;

            }
            if (cell.tileChar == 'S') {
                if (wholePipe) {
                    wholePipe = false;

                } else {
                    pipeJumps++;
                }

            }
            if (cell.tileChar == '-') {
                Connected = true;
            }
            if (cell.tileChar == 'L') {
                if (wholePipe) {
                    wholePipe = false;

                } else {
                    pipeJumps++;
                }
            }
            if (cell.tileChar == "7") {
                if (Connected) {

                    pipeJumps++;

                    Connected = false;
                }
            }
            if (cell.tileChar == "F") {
                if (wholePipe) {
                    wholePipe = false;

                } else {
                    pipeJumps++;
                }
            }
            if (cell.tileChar == "J") {
                if (Connected) {
                    pipeJumps++;
                    Connected = false;
                }
            }
            if (pipeJumps == 2) {
                pipeJumps = 0
            }
        }
        if (!cell.connected) {
            cell.enclosed++;


            if (pipeJumps == 1) {

                cell.enclosed++;
                enclosedCells++;
            }


        }


        console.log(createColouredString(pipeArray));
    }
    pipeJumps = 0;
    Connected = false;
}

console.log(createColouredString(pipeArray));
console.log(enclosedCells);
