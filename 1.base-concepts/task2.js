"use strict";

// Калькулятор ипотеки

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let p = Number(percent);
    let c = Number(contribution);
    let a = Number(amount);
    let n = Number(countMonths);

    if (isNaN(p) || isNaN(c) || isNaN(a) || isNaN(n)) {
        return false;
    }

    let loanBody = a - c;

    if (loanBody <= 0) 
      
    let monthlyPercent = (p / 100) / 12;

    let payment = loanBody * (monthlyPercent + (monthlyPercent / ((1 + monthlyPercent) ** n - 1)));

    let total = payment * n;

    return Number(total.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
