var readlineSync = require("readline-sync");
const chalk = require("chalk");
var score = 0
function quiz(question, answer){
  var userans = readlineSync.question(question);
  if(userans === answer){
    score ++;
    console.log(chalk.bold.green("Your answer is right! "))
    console.log(chalk.bold.bgWhite(chalk.bold.blue("Score : ", score)));
  }
  else{
    console.log(chalk.bold.red("Your answer is wrong! "))
    console.log(chalk.bold.yellow("Score : ", score));
  }
}
quiz("What is the capital of India ", "Delhi"); 