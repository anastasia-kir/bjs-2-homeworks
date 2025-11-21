"use strict";

// ===== ЗАДАЧА 1 =====
function solveEquation(a, b, c) {
    let result = [];
    let d = b**2 - 4*a*c;
    if (d < 0) return result;
    else if (d === 0) { result.push(-b/(2*a)); }
    else { result.push((-b + Math.sqrt(d))/(2*a)); result.push((-b - Math.sqrt(d))/(2*a)); }
    return result;
}

// ===== ЗАДАЧА 2 =====
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    percent = Number(percent); contribution = Number(contribution);
    amount = Number(amount); countMonths = Number(countMonths);
    if (isNaN(percent)||isNaN(contribution)||isNaN(amount)||isNaN(countMonths)) return false;
    let loanBody = amount - contribution; if (loanBody<=0) return 0;
    let monthlyRate = percent/100/12;
    let monthlyPayment = loanBody*(monthlyRate + monthlyRate/((1+monthlyRate)**countMonths - 1));
    return Number((monthlyPayment*countMonths).toFixed(2));
}
