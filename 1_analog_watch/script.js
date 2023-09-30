const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");

setInterval(()=>{
    const date = new Date;
    const hourDegree = date.getHours()/12 * 360 - 90;
    const minuteDegree = date.getMinutes()/60 * 360 -90;
    const secondDegree = date.getSeconds()/60 * 360 -90;

    hourElement.style.transform =`rotate(${hourDegree}deg)`;
    minuteElement.style.transform =`rotate(${minuteDegree}deg)`;
    secondElement.style.transform =`rotate(${secondDegree}deg)`;
}, 1000)