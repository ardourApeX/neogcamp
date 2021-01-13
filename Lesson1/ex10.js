var readlineSync = require("readline-sync");
var grocerry = ["Maggi", "Soft Drink", "Biscuits", "Ketchup", "Jam"];
var length = grocerry.length
console.log("Go and get : ")
for(var i = 0; i < length; i = i+2){
	console.log(grocerry[i])
}
