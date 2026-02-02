// Loop in js 

for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

// Output:
//  number: 0
// number: 1
//  number: 2
// number: 3
//  number: 4  

let sum = 0;    
for (let i = 1; i <= 5; i++) {
    sum += i;  
}
console.log("Sum of first 5 natural numbers: " + sum);  
// Output:
// Sum of first 5 natural numbers: 15

// while loop
let count = 1;
while (count <= 5) {
    console.log("Count is: " + count);
    count++;
}
// Output:
// Count is: 1
// Count is: 2
// Count is: 3
// Count is: 4
// Count is: 5

// do...while loop
let num = 1;
do {
    console.log("Number is: " + num);
    num++;
} while (num <= 5);
// Output:
// Number is: 1
// Number is: 2
// Number is: 3
// Number is: 4
// Number is: 5

// Loop through an array
let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit: " + fruits[i]);
}
// Output:
// Fruit: Apple
// Fruit: Banana
// Fruit: Cherry

// Loop through an object
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// city: New York

// Nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log("i: " + i + ", j: " + j);
    }
}
// Output:
// i: 1, j: 1
// i: 1, j: 2
// i: 2, j: 1
// i: 2, j: 2
// i: 3, j: 1
// i: 3, j: 2

// Break and continue statements
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break; // Exit the loop when i is 6
    }
    console.log("Number: " + i);
}
// Output:
// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Number: 5

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log("Odd Number: " + i);
}
// Output:
// Odd Number: 1
// Odd Number: 3
// Odd Number: 5
// Odd Number: 7
// Odd Number: 9
