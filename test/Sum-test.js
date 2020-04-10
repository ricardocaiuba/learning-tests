"use strict";

const Sum = require("./Sum");

console.assert(typeof Sum === "function", "should sum is a function!");

console.assert(Sum(1, 2) === 3, "Should Sum(1, 2) return 3!");

console.assert(Sum(2, 3) === 5, "Should Sum(2, 3) return 5!");

console.log("All tests passed!");
