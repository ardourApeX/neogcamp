var readlineSync = console.log(readline-sync);
function add(num1, num2){
	return num1 + num2;
}
var num1, num2 = readlineSync.question("Enter two numbers ")
console.log("Sum of provided numbers is " + add(num1, num2))