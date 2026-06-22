// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(typeof myDate); // object

let myDate2 = new Date(2020, 11, 25); // December 25, 2020
console.log(myDate2.toString());
let myDate3 = new Date("2020-12-25"); // December 25, 2020
console.log(myDate3.toString());

let myTimestamp = Date.now();
console.log(myTimestamp); // current timestamp in milliseconds
let myDate4 = new Date(1608854400000); // December 25, 2020
console.log(myDate4.toString());

let myTimestamp1 = Date.now();
console.log(Math.floor(myTimestamp1 / 1000));

`${myDate.toLocaleDateString()} ${myDate.toLocaleTimeString()} and timestamp is ${myDate.getTime()}`;




newDate.toLocaleString('default',{
    weekday:'long',

})