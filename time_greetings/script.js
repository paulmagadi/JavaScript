//let timeCheck = new Date().toDateString();
let d = new Date();
let hourCheck = d.getHours();
let minCheck = d.getMinutes();

let greetings;

if(hourCheck > 4 & hourCheck < 12){
    greetings = "Good morning friend";
} else if(hourCheck > 11 & hourCheck < 15){
    greetings = "Good afternoon friend";
} else if(hourCheck > 16 & hourCheck < 20){
    greetings = "Good evening friend";
}
else{
    greetings = "Good night friend";
}

document.getElementById("greetings").innerHTML = greetings;

document.getElementById("hour").innerHTML = hourCheck;
document.getElementById("min").innerHTML = minCheck;

let len = hourCheck.toString;

if(len.length === 0){
    document.getElementById("desc").style.display = "inline-block";
}
else{
    
}

