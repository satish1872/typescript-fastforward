"use strict";
//-----------
// functions
//-----------
function addTwoNumbers(a, b) {
    return a + b;
}
function sum(a, b) {
    return a + b;
}
const subArrow = (a, b) => a - b;
console.log("subArrow", subArrow(10, 2));
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
function addAllNumbers2(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
// addTwoNumbers('2', 5)
addTwoNumbers(3, 9);
subtractTwoNumbers(10, 7);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([5, 7, 9, 11, 3, 2, 1]);
addAllNumbers2([5, 7]);
//-----------------------
// return type inference
//-----------------------
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
// we get inference on return types, but not on argument types
// type inference on return values does not enforce a return type
