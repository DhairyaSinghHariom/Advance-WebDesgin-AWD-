
// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!

// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // Output: 8


// Arrow Function
const multiply = (x, y) => x * y;
console.log(multiply(4, 6)); // Output: 24

// Function with Default Parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
console.log(power(3)); // Output: 9
console.log(power(2, 3)); // Output: 8

// Function with Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4));
// Output: 10

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This function runs immediately!");
})();
// Output: This function runs immediately!

// Recursive Function
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Function as First-Class Citizens
function operate(a, b, operation) {
    return operation(a, b);
}
const subtract = (x, y) => x - y;
console.log(operate(10, 4, subtract)); // Output: 6

// Callback Function
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }


, 1000);}
fetchData((data) => {
    console.log("Received:", data);
});
// Output (after 1 second): Received: Sample Data   
// Function with Closure
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
    }
}
const newFunction = outerFunction("outside");
newFunction("inside");
// Output:
// Outer Variable: outside
// Inner Variable: inside
// Function with Callback and Higher-Order Function
function filterArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]        continue;
    if (i % 2 === 0) {
    console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// 5
// Breaks the loop when i is 6  
