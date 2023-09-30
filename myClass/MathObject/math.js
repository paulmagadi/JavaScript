let num1 = Math.random().toFixed(1) * 10;  //0 and 10
let num2 = Math.random().toFixed(1) * 10;  //0 and 50
let num3 = Math.random().toFixed(1) * 10; //0 and 100

//Math.random() returns a random float < 1
//toFixed() fixes the float to the specified digit(ie. toFixed(1) set the random number to 1 decimal place)
//*10 returns a random number between 0 and 10
console.log(num1, num2, num3);


//use math.max() to get the largest of the three random numbers
let max = Math.max(num1, num2, num3);  
console.log(max);

const PI = Math.PI;
console.log(PI.toFixed(1)); // 3.1

let pow = Math.pow(2, 3); // 2^3=8
console.log(pow);

let floor = Math.floor(58.9);  //integer 58
console.log(floor);

let round = Math.round(58.9);  //integer 59
console.log(round);