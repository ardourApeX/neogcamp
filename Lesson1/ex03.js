var readlineSync = require("readline-sync");
// Packages will be added to package-lock.json
var username = readlineSync.question("What is your name? ");
var message = "Welcome " + username;
console.log(message);