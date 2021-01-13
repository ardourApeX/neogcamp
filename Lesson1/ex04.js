var readlineSync = require("readline-sync");
const chalk = require("chalk");
const log = console.log;
// Packages will be added to package-lock.json
var username = readlineSync.question("What is your name? ");
log(chalk.bgYellow('Welcome', chalk.blue(username) + '!'));