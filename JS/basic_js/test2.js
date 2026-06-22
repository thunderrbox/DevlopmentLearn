//  "33" => 33
// "33abc" =>NAN

// * Prefix and Postfix JS and MDN by developer.mozilla.org

//* Link to study : https://tc39.ecma262/multipage/abstract-operations.html#sec-type-conversion

// == checks only value but not type
// === checks both value and data type i.e. strictly check

// *Avoid this type of comparison
// console.log(33 == "33"); // true
// console.log(33 === "33"); // false
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// Reference Data Type(Non Primitive) => Object, Array, Function
// Primitive Data Type => String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Javascript is  a dynamic type converted language, it means we can change the data type of a variable at runtime.

// By default values in JavaScript are undefined until they are assigned a value. When you declare a variable without initializing it, it will have the value of undefined. For example:

// *https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++MEMORY*************

// Stack(Primitive), Heap(Non Primitive)

let mychannel = "abhijeetYTchannel"; // This string is stored in the stack memory as it is a primitive data type

let anotherYtchannel = mychannel; // anotherYtchannel is a copy of the value stored in mychannel, so it is also stored in the stack memory

console.log(mychannel); // Output: "abhijeetYTchannel"
console.log(anotherYtchannel); // Output: "abhijeetYTchannel"

// ----------------------------------

let userOne = {
  name: "John",
  age: 30,
};

let userTwo = userOne; // userTwo is a reference to the same object in memory as userOne

userTwo.name = "Abhijeet"; // This will change the name property of the object that both userOne and userTwo reference

// As the object is stored in the heap and both userOne and userTwo are referencing the same object, any change made through one reference will affect the other reference as well. Therefore, when we log userOne, we will see that the name property has been changed to "Abhijeet".

console.log(userOne.name); // Output: "Abhijeet"
console.log(userTwo.name); // Output: "Abhijeet"

// To avoid this, we can create a new object for userTwo using Object.assign() or the spread operator to create a shallow copy of the object. This way, userTwo will reference a different object in memory, and changes to one will not affect the other.


