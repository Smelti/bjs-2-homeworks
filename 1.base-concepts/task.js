"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b*b) - (4 * a * c);
  if (d < 0) {
    arr = [];
  }
  else if (task === 0) {
    arr = [-b / (2 * a)];
  }
  else if (task > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a),
       (-b - Math.sqrt(d)) / (2 * a)];
  }
  return arr;
}

// function calculateTotalMortgage(percent, contribution, amount, countMonths) {
//   let credit = amount - contribution;
//   let interestRate = percent / 100 / 12;
//   let monthlyPayment = credit * (interestRate + (interestRate / (((1 + interestRate)**countMonths) - 1)));
//   return Math.cell(monthlyPayment).toFixed(2);
// }
