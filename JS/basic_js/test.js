console.log("Abhijeet");
const accountId = 456321;
let accountEmail = "abhijeet@gmail.com";
var accountAge = 21;

console.log(accountId);

console.table([accountId, accountEmail, accountAge]);
// Prefer not to use var
// var is function scoped and can lead to unexpected behavior due to hoisting, while let and const are block scoped and provide better control over variable declarations.
