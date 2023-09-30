let names = ["paul mulumba", "bella diamonds", "annabell natea", " brenda williams", "tinna ballard","sam black"];

// toString();
const mtdtoString = document.querySelector(".mtdtoString");

let names1 = ["paul mulumba", " bella diamonds", " annabell natea", " brenda williams", " tinna ballard and sam black"];
mtdtoString.innerHTML = `In the book "BELLA DIAMONDS", the characters include: ${names1.toString()}`;

// let characters = names1.toString();
// mtdtoString.innerHTML = "In the book \"BELLA DIAMONDS\", the characters include: " + characters;
// mtdtoString.innerHTML = `In the book "BELLA DIAMONDS", the characters include:  ${characters}`;


//join();
let names2 = ["paul mulumba", "bella diamonds", "annabell natea", " brenda williams", "tinna ballard","sam black"];

const mtdjoin = document.querySelector(".mtdjoin");
const mtdjoin2 = document.querySelector(".mtdjoin2");

let characters2 = names2.join(", ");
mtdjoin.innerHTML = `In the book "BELLA DIAMONDS", the characters include:  ${characters2}`;

//concat();
const mtdconcat = document.querySelector(".mtdconcat");

let names3 = ["paul mulumba", "bella diamonds", "annabell natea", " brenda williams", "tinna ballard","sam black"];
let nam = ["bells", "smith"];
let nams = ["vic"]

let concated = names3.concat(nam, nams);
mtdconcat.innerHTML = concated;

//splice

const mtdsplice = document.querySelector(".mtdsplice");
const mtdsplice2 = document.querySelector(".mtdsplice2");
const mtdsplice3 = document.querySelector(".mtdsplice3");

let names4 = ["paul mulumba", "bella diamonds", "annabell natea", " brenda williams", "tinna ballard","sam black", "bells", "smith", "vic"];
let names5 = ["paul mulumba", "bella diamonds", "annabell natea", " brenda williams", "tinna ballard","sam black", "bells", "smith", "vic"];

let spliced = names4.splice(6, 3);
let spliced2 = names5.splice(6, 2, "job", "hugs");

mtdsplice.innerHTML = spliced;
mtdsplice2.innerHTML = spliced2;
mtdsplice3.innerHTML = names5;

//slice
const mtdslice = document.querySelector(".mtdslice");

let names6 = ["paul mulumba", "bella diamonds", "annabell natea", " brenda williams", "tinna ballard","sam black", "bells", "smith", "vic"];

let sliced = names6.slice(6, 3);

mtdslice.innerHTML = sliced;


