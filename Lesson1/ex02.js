var readlineSync = require("readline-sync");
const chalk = require("chalk");
// Packages will be added to package-lock.json
var username = readlineSync.question("What is your name? ");
console.log(chalk.bgCyan(username))