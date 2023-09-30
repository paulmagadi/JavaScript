let roll =7;

switch(roll) {
    case 1:
        console.log("You rolled a 1");
        break;
    case 2:
        console.log("You rolled a 2");
        break;
    case 3: 
        console.log("You rolled a 3");
        break;
    case 4:
        console.log("You rolled a 4");
        break;
    case 5:
        console.log("You rolled a 5");
        break;
    default:
        console.log(`The number ${roll} not possible`);
}


let today = new Date().toLocaleString("default", {weekday: "short"});

switch(true) {
    case today === "Mon":
        console.log(`Today is ${today}`);       
         break;
    case today === "Tue":
        console.log(`Today is ${today}`);       
         break;
    case today === "Wed":
        console.log(`Today is ${today}`);        
        break;
    case today === "Thu":
        console.log(`Today is ${today}`);       
         break;
    case today === "Fri":
        console.log(`Today is ${today}`);       
        break;
    case today === "Sat":
        console.log(`Today is ${today}`);        
        break;
    case today === "Sun":
        console.log(`Today is ${today}`);         
        break;
    default:
        console.log(`Not applicable`);
}


let favFood = "Ugali";

switch(favFood) {
    case  "Rice":
        console.log(`That's right! ${favFood} is my favourite`);
        break;
    case "Uji":
        console.log(`That's right! ${favFood} is my favourite`);
        break;
    case "Ugali":
        console.log(`That's right! ${favFood} is my favourite`);
        break;
    case "Beans":
        console.log(`That's right! ${favFood} is my favourite`);
        break;
    case "Pizza":
        console.log(`That's right! ${favFood} is my favourite`);
        break;
    default:
        console.log(`Favourite food not found...I am hungry!!!`);
}

