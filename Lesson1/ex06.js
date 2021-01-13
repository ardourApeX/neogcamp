var readlineSync = require("readline-sync");
const chalk = require("chalk");
var choice = readlineSync.question("What is your country name? ")
var score = 0;
if(choice === "India" || choice === "india"){
  score = score + 1;
}
console.log(chalk.bgCyan("Your score " + chalk.bold.red(score)));