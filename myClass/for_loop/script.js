// for(i =0; i <= 5; i++) {
//     console.log(i);
// }

const pupils = ["paul", "bells", "diamonds", "halls"];

let para = document.querySelector("p"); // get the "p" element in the html dom
let info = "The pupils are ";

for(let i = 0; i < pupils.length; i++) {  //iterate through the stringed array
    if(i === pupils.length - 1){  // check the last pupil from the array
        info += `and ${pupils[i]}.`; // dispay last pupil 
    } else {
        info += `${pupils[i]}, `;  // displays the firt 3 pupils separated by a comma
    }
}

para.innerHTML = info;  // paste the info variable into the paragraph

for(x = 0; x < pupils.length; x++) {
    console.log(`${pupils[x]}`);
}

const colours = ["red", "white", "blue", "black", "pink"];

for(let colour = 0; colour < colours.length; colour++){
    console.log(`${colours[colour]} is my favourite color`);
}