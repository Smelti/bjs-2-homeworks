function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((a, b) => (a + b)) / arr.length;
  let avg = Number(sum.toFixed(2));
  return {min, max, avg};
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let difference = max - min;
  if (arr.length === 0) {
    return 0;
  }
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
  let sumElemets = 0;
  let countElements = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumElemets += arr[i];
      countElements++;
    }
    if (arr.length === []) {
    return 0;
    }
  }
  let avg = sumElemets / countElements;
  return avg;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    if (func(...arrOfArr[i]) > maxWorkerResult) {
      maxWorkerResult = func(...arrOfArr[i]);
    }
  }
  return maxWorkerResult;
}
