import { data, sample3 } from "./day8Data";

let sampleMode = false;
const currentData = sampleMode ? sample3 : data;

const STARONE = false;

interface nodemapMap {
  [x: string]: nodemapNode;
}
interface nodemapNode {
  left: string;
  right: string;
  [key: string]: any;
}

// split the data by \n\n

let splitData = currentData.split("\n\n");

// to get navigation LR and node map
let navigation: string[] = splitData[0].split("");
let nodeMapString = splitData[1].split("\n").map((row) => {
  let rowSplit = row.split(" = ");
  let directionsSplit = rowSplit[1].split(",");

  return {
    nodeName: rowSplit[0],
    left: directionsSplit[0].replace("(", "").trim(),
    right: directionsSplit[1].replace(")", "").trim(),
  };
});

//console.table(navigation);
//console.table(nodeMapString);
//parse node map into object
let nodeMap: nodemapMap = {};

nodeMapString.map((node) => {
  nodeMap[node.nodeName] = {
    left: node.left,
    right: node.right,
  };
});

console.table(nodeMap);

// traveral node map to ZZZ
let startingNode = "AAA";
let endNode = "ZZZ";
let currentNode = startingNode;
let navigationIndex = 0;
let traversingSteps = [];

if (STARONE) {
  while (currentNode != endNode) {
    traversingSteps.push(currentNode);
    let node = nodeMap[currentNode];

    currentNode = node.left;
    if (navigation[navigationIndex] == "R") {
      currentNode = node.right;
    }

    navigationIndex++;
    if (navigation.length == navigationIndex) {
      navigationIndex = 0;
    }
  }

  console.log(`StarOne : ${traversingSteps.length}`);
}

let traversingStepsCount = 0;
// star Two
//find all rows which end with 'A'
if (!STARONE) {
  //let nodeMapSet = new Set(nodeMap);
  let startingNodes = Object.keys(nodeMap).filter(
    (nodeName) => [...nodeName][2] == "A"
  );

  //console.table(startingNodes);

  //let currentNodes = startingNodes;

  // while (!currentNodes.every(nodeName => ([...nodeName][2] == 'Z'))) {

  //     //traversingSteps.push(currentNodes);
  //     //console.table(currentNodes);
  //     traversingStepsCount++;
  //     if (traversingStepsCount % 1000000 == 0) {
  //         console.log(traversingStepsCount);
  //     }

  //     currentNodes = currentNodes.map(currentNode => {
  //         //traversingSteps.push(currentNode);
  //         let node = nodeMap[currentNode];

  //         currentNode = node.left;
  //         if (navigation[navigationIndex] == 'R') {
  //             currentNode = node.right;
  //         }

  //         return currentNode;
  //     })

  //     navigationIndex++;
  //     if (navigation.length == navigationIndex) {
  //         navigationIndex = 0;
  //     }

  // }

  let FirstZAppears = startingNodes.map((node) => {
    let currentNode= node;
    let stepCount=0;
    while ([...currentNode][2] != 'Z') {
        //traversingSteps.push(currentNode);
        stepCount++;
        let node = nodeMap[currentNode];
    
        currentNode = node.left;
        if (navigation[navigationIndex] == "R") {
          currentNode = node.right;
        }
    
        navigationIndex++;
        if (navigation.length == navigationIndex) {
          navigationIndex = 0;
        }
      }
      return stepCount;

  });

  function gcd(a: number, b: number): number {
    return a ? gcd(b % a, a) : b;
  }

  function lcm(a: number, b: number) {
    return (a * b) / gcd(a, b);
  }

  let starTwo = FirstZAppears.reduce(lcm);
  console.log(`Star Two : ${starTwo}`);
}
