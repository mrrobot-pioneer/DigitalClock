let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let meridianContainer = document.getElementById("meridian");

function getTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  // convert to 12 hour clock then check AM/PM
  let meridian = "AM"; //DEFAULT

  if (hours > 12) {
    hours = hours - 12;
    meridian = "PM";
  }

  // append 0 to values less than 10 e.g 8 => 08
  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // update th DOM
  hrs.textContent = hours;

  min.textContent = minutes;
  sec.textContent = seconds;

  meridianContainer.textContent = meridian;
}

setInterval(() => {
  getTime();
}, 1000);
