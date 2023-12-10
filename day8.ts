import { data, sample3 } from "./day8Data";

let sampleMode = true;
const currentData = sampleMode ? sample3 : data;

interface nodemapMap {
    [x: string]: nodemapNode;
}
interface nodemapNode {
    left: string,
    right: string,
    [key: string]: any;
}

// split the data by \n\n

let splitData = currentData.split('\n\n');

// to get navigation LR and node map
let navigation: string[] = splitData[0].split('');
let nodeMapString = splitData[1].split('\n').map(row => {

    let rowSplit = row.split(' = ');
    let directionsSplit = rowSplit[1].split(',');


    return {
        nodeName: rowSplit[0],
        left: directionsSplit[0].replace('(', '').trim(),
        right: directionsSplit[1].replace(')', '').trim()

    }
})

//console.table(navigation);
//console.table(nodeMapString);
//parse node map into object
let nodeMap: nodemapMap = {};

nodeMapString.map(node => {
    nodeMap[node.nodeName] = {
        left: node.left,
        right: node.right
    }
})

console.table(nodeMap);

// traveral node map to ZZZ 
let startingNode = 'AAA';
let endNode = 'ZZZ';
let currentNode = startingNode;
let navigationIndex = 0;
let traversingSteps = [];

while (currentNode != endNode) {
    traversingSteps.push(currentNode);
    let node = nodeMap[currentNode];

    currentNode = node.left;
    if (navigation[navigationIndex] == 'R') {
        currentNode = node.right;
    }

    navigationIndex++;
    if (navigation.length == navigationIndex) {
        navigationIndex = 0;
    }

}

console.log(`StarOne : ${traversingSteps.length}`);





