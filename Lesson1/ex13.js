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
  console.log(qna[x].question);
  console.log("Correct Answer : ", qna[x].answer)
}