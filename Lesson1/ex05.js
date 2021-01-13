var readlineSync = require("readline-sync");
const chalk = require("chalk");
var choice = readlineSync.question("Are you older than 25? ")
if(choice === "yes"){
	console.log(chalk.bold.green("Right!"));
}
else{
	console.log(chalk.bold.red("Wrong!"));
}