const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");

setInterval(getRotation, 1000);

function getRotation(){
    const currentDate = new Date;
    const hourDegree = currentDate.getHours()/12 * 360 - 90;
    const minuteDegree = currentDate.getMinutes()/60 * 360 -90;
    const secondDegree = currentDate.getSeconds()/60 * 360 -90;

    hourElement.style.transform =`rotate(${hourDegree}deg)`;
    minuteElement.style.transform =`rotate(${minuteDegree}deg)`;
    secondElement.style.transform =`rotate(${secondDegree}deg)`;
}

getRotation();