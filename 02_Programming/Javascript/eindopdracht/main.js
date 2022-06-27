setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');


function setClock(){
let date = new Date();
let secondsRatio = date.getSeconds() / 60;
let minutesRatio = (secondsRatio + date.getMinutes()) / 60;
let hoursRatio = (minutesRatio + date.getHours()) / 12;
setRotation(hourHand, hoursRatio );
setRotation(minuteHand, minutesRatio);
setRotation(secondHand, secondsRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();