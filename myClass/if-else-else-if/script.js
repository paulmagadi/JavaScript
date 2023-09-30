let number = Math.random().toFixed(1) * 10;
console.log(number);

if(number === 1) {
    console.log("you lose");
} else {
    console.log("You win");
}


//else if

let num = Math.random().toFixed(1) * 10;
console.log(num);

if(num === 0) {
    console.log("you are a loser");
} 
else if(num === 1) {
    console.log("you lose");
} 
else if(num === 2){
    console.log("not it");
}
else if(num === 3){
    console.log("try again");
}
else if(num === 4){
    console.log("close");
}
else if(num === 5){
    console.log("you win");
}
else if(num === 6){
    console.log("close");
}
else if(num === 7){
    console.log("try again");
}
else if(num === 8){
    console.log("not it");
}
else if(num === 9){
    console.log("you lose");
} else{
    console.log("you are a loser")
}


let myName = ("bella")

if (myName === "paul") {
    console.log("correct");
}
else if(myName === "bells") {
    console.log("No you are not bells");
}
else if(myName === "bella") {
    console.log("Bella is your friend");
}
else if(myName === "diamonds") {
    console.log("you are not diamonds");
} else {
    console.log("name not known")
}


let nums = 10+2;

if(num > 2 && num <20 ) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}


let user = "employee";

if(user === "guest"){
    console.log("Login Denied");
} 
else if(user === "employee") {
    console.log("Succesfully Logged in");
}


const myNames = "paulsq";
let nameLength = myNames.length;

if(myNames.length > 5) {    // if (nameLength > 5) { console.log("More than 5");}
    console.log(myNames.length);
    console.log("More than 5");
    window.alert("more than 5");
}
else if(myNames.length == 5) {
    console.log(myNames.length);
    console.log("Exactly 5 letters");
    window.alert("Exactly 5 letters");
} else {
    console.log(myNames.length);
    console.log("Less than 5 letters");
    window.alert("Less than 5");
}