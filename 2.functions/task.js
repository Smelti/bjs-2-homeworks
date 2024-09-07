function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((a, b) => (a + b)) / arr.length;
  let avg = Number(sum.toFixed(2));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max === arr[i];
    }
    if (arr[i] < min) {
      min === arr[i];
    }
  }
  return {min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
    if (arr.length === []) {
    return 0;
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElemets = 0;
  let sumOddElements = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElemets += arr[i];
    }
    if (arr[i] % 2 !== 0) {
      sumOddElements += arr[i];
    }
  }
  let difElements = sumEvenElemets - sumOddElements;
  return difElements;
}

function averageEvenElementsWorker(...arr) {
  let SumElemets = 0;
  let countElements = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      SumElemets += arr[i];
      countElements++;
    }
  }
  let avg = SumElemets / countElements;
  return avg;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
    if (result === -Infinity) {
      return 0;
    }
    return maxWorkerResult;
  }
