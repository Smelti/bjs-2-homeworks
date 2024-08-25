"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let task = b**2 - 4 * a * c;
  if (task < 0) {
    arr = [];
  }
  if (task === 0) {
    arr = [-b / (2 * a)];
  }
  if (task > 0) {
    arr = [(-b + Math.sqrt(b)) / (2 * a),
       (-b - Math.sqrt(b)) / (2 * a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) 
{
let credit = contribution - amount;
let interestRate = percent / 100 / 12;
let monthlyPayment = credit * (interestRate + (interestRate / (((1 + interestRate)**countMonths) - 1)));
    
console.log(Math.round(monthlyPayment).toFixed(2));
  }
console.log(calculateTotalMortgage);