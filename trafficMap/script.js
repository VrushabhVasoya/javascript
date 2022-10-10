"use strict";

const isPossible = {
  is0: [0, 2, 5],
  is1: [1, 4, 5],
  is2: [4, 5],
  is3: [0, 2, 5],
  is4: [0, 2, 5],
  is5: [1, 2, 3],
  isFirst: [0, 2],
  isLast: [0, 4],
};

let roadMap = [
  [0, 2, 1],
  [5, 4, 0],
];

let isClearTraffic = true;
const vmapSize = roadMap.length;
const hmapSize = roadMap[0].length;
let i = 0,
  j = 0;

const trafficMap = (directions) => {
  if (!isPossible.isFirst.includes(directions[0][0])) {
    return false;
  }
  if (!isPossible.isLast.includes(directions[vmapSize - 1][hmapSize - 1])) {
    return false;
  }
  while (i < vmapSize - 1 && j < hmapSize - 1) {
    let item = roadMap[i][j];
    switch (item) {
      case 0:
      case 3:
      case 4:
        j++;
        break;
      case 1:
      case 2:
      case 5:
        i++;
        break;
    }
    let nextItem = roadMap[i][j];
    if (!isPossible[`is${item}`].includes(nextItem)) {
      return false;
    }
  }
  return true;
};

console.log(trafficMap(roadMap));

roadMap = [
  [0, 2, 1],
  [5, 4, 1],
];
console.log(trafficMap(roadMap));
roadMap = [
  [0, 2, 1],
  [5, 4, 2],
];
console.log(trafficMap(roadMap));
roadMap = [[1], [2]];
console.log(trafficMap(roadMap));
