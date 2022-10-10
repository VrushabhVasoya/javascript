"use strict";

const isZigzagNumbers = (array) => {
  let zigzagArray = [];
  for (let i = 0; i < array.length - 2; i++) {
    const item0 = array[i];
    const item1 = array[i + 1];
    const item2 = array[i + 2];
    if ((item1 > item0 && item1 > item2) || (item1 < item0 && item1 < item2)) {
      zigzagArray.push(1);
    } else {
      zigzagArray.push(0);
    }
  }
  return zigzagArray;
};

let arr = [1, 2, 1, 3, 4];

console.log(isZigzagNumbers(arr));

arr = [1, 2, 3, 4];
console.log(isZigzagNumbers(arr));
arr = [100000, 100000, 100000];
console.log(isZigzagNumbers(arr));
