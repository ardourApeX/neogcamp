const chalk = require("chalk");
var superman = {
  name : "superman",
  power : "flight",
  costumecolor : "blue",
  strength : 10000,
  stealth : 0
}

var batman = {
  name : "batman",
  power : "martial arts",
  costumecolor : "black",
  strength : 100,
  stealth : 100
}
console.log(chalk.bgRed.bold.blue(superman.name))
console.log(chalk.bgGray.bold.black(batman.name))