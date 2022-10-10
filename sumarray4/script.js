const arr = [1, 2, 4, -1, 6, 1];

const subArraysCountBySum = (array, k, s) => {
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += array[j];
      if (sum == s) {
        const slicedarray = array.slice(i, j + 1);
        if (slicedarray.length <= k) {
          resultArray.push(slicedarray);
        }
      }
    }
  }
  return resultArray.length;
};

const result = subArraysCountBySum(arr, 3, 6);
console.log(result);
