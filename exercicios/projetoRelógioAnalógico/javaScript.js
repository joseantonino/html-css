const numberHours = document.querySelector(".number-hours");
const barSeconds = document.querySelector(".bar-seconds");

const numberElement = [];
const barElement = [];
//ciar números de horas//
for (let i = 1; i <= 12; i++) {
  numberElement.push(`<span style="--index:${i}"><p>${i}</p></span>`);
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

//criar barra de segundos.

for (let i = 1; i <= 60; i++) {
  barElement.push(`<span style="--index:${i};"><p></p></span>`);
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector(".hand.hours");
const handMinutes = document.querySelector(".hand.minutes");
const handSeconds = document.querySelector(".hand.seconds");

function getCurrentTime() {
  let date = new Date();
  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();
  let currentSeconds = date.getSeconds();

  handHours.style.transform = `rotate(${
    currentHours * 30 + currentMinutes / 2
  }deg)`;
  handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
  handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}

//chamar a função getCurrentTime no carregamento da pagina.
getCurrentTime();

//chamar a função getCurrentTime no carregamento da pagina.
setInterval(getCurrentTime, 1000); //1000ms = 1s
