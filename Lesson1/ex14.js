var readlineSync = require("readline-sync");
const chalk = require("chalk");
function askuser(quesiton, answer){
  var useranswer = readlineSync.question(question);
  if(useranswer === answer){
    console.log(chalk.bold.green("You were right! :D "))
  }
  else{
    console.log(chalk.bold.red("You were wrong! :("))
  }
}


var qna = [
  {
    question : "What is the capital of India? ",
    answer : "Delhi"},
  {
    question : "What is our national animal? ",
    answer : "Tiger"
  },
  {
    question : "What is our national fruit? ",
    answer : "Mango"
  }
]

for(var x = 0; x < qna.length; x ++){
  askuser(qna[x].question, qna[x].answer);
}