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
    if (arr.length === 0) {
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return  max - min;
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
  return sumEvenElemets - sumOddElements;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
  return 0;
    }
  let sumElemets = 0;
  let countElements = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumElemets += arr[i];
      countElements++;
    }
  }
  return sumElemets / countElements;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(...arrOfArr[i]);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }
  return maxWorkerResult;
}
