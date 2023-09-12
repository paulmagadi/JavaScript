//if, else statement
const displayGreetings = document.getElementById("words");

const fullDate = new Date();
let time = fullDate.getHours();

if (time <= 16) {
    displayGreetings.innerHTML = "Good Day";
} else {
    displayGreetings.innerHTML = "Good Evening";
}


//if, else, else if statements
let greetings;

if (time < 12) {
  greetings = "Good morning";
} else if (time => 12) {
  greetings = "Good Afternoon";
} else if (time =>16) {
  greetings = "Good Evening";
} else {
    greetings = "Good Night";
}

document.getElementById('greeting').innerHTML = greetings;

//switch statement

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("day").innerHTML = "Today is " + day;



  
//month
  const months = fullDate.getMonth();
  
  let month;
  switch (months) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      month = "Unknown";
      break;
  }

document.getElementById("month").innerHTML = month;


//Common code block

const week = fullDate.getDay();
let text;

switch (week) {
    case 4:
    case 5:
      text = "Almost a Weekend";
      break;
    case 0:
    case 6:
      text = "It is a Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
  }

  document.getElementById("week").innerHTML = text;