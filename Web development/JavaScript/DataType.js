// DataTypes in JavaScript

// 1. Number
let num = 42;
console.log(typeof num); // "number"

// 2. String
let str = "Hello, World!";
console.log(typeof str); // "string"

// 3. Boolean
let bool = true;
console.log(typeof bool); // "boolean"

// 4. Undefined
let undef;
console.log(typeof undef); // "undefined"

// 5. Null
let nul = null;
console.log(typeof nul); // "object" (this is a known quirk in JavaScript)

// 6. Object
let obj = { name: "Alice", age: 30 };
console.log(typeof obj); // "object"

// 7. Symbol
let sym = Symbol("unique");
console.log(typeof sym); // "symbol"

// 8. BigInt
let bigInt = 9007199254740991n;
console.log(typeof bigInt); // "bigint"

// Output:
// "number"
// "string"
// "boolean"
// "undefined"
// "object"
// "object"
// "symbol"
// "bigint" 