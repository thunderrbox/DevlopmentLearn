const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const num = 23.58228;
console.log(num.toPrecision(3));

const tens = 100000000000;
console.log(tens.toLocaleString());
console.log(tens.toLocaleString("en-US"));

//* ---------------------Maths-----------------

console.log(Math.random()); // generates a random number between 0 and 1
console.log(Math.random() * 10); // generates a random integer between 0 and 9
//  And for avoiding 0 we can do like this
console.log(Math.random() * 10 + 1); // generates a random integer between 1 and 10

console.log(Math.floor(Math.random() * 10) + 1); // generates a random integer between 1 and 10
// Math.floor() is used to round down the number to the nearest integer

const max = 20;
const min = 10;

console.log(Math.random() * (max - min + 1) + min);
// generates a random integer between 10 and 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// generates a random integer between 10 and 20