"use strict";

// Решение квадратного уравнения

function solveEquation(a, b, c) {
    let d = b * b - 4 * a * c;

    if (d < 0) {
        return [];
    } 
    
    else if (d === 0) {
    
        let x = -b / (2 * a);
        return [x];
    } else {
  
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        return [x1, x2];
    }
}

console.log(solveEquation(1, -3, 2)); // [2, 1]
console.log(solveEquation(1, 2, 1));  // [-1]
console.log(solveEquation(1, 0, 1));  // []
