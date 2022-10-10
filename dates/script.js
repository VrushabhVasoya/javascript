"use Strict";

const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(`${now.getHours()}`.padStart(2, 0));
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.toISOString());

console.log(Date.now());

const calcDayDiff = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days = calcDayDiff(new Date(2031, 2, 21, 23), new Date(2031, 3, 21));

console.log(days);

console.log(new Intl.DateTimeFormat("en-US").format(now));

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};

const locale = navigator.language;
console.log(locale);

console.log(new Intl.DateTimeFormat(locale, options).format(now));

const pizza = ["cheese burst", "Lapinoze"];
const timer = setTimeout(
  (arg1) => {
    console.log(`Time Out... :) ${arg1}`);
  },
  3000,
  "wait..."
);

if (pizza.includes("Lapinoze")) {
  clearTimeout(timer);
}

//create CountDown Timer
let time = 10;

const countDownTimer = setInterval(() => {
  const minutes = String(Math.trunc(time / 60)).padStart(2, 0);
  const seconds = String(time % 60).padStart(2, 0);
  document.querySelector(".timer").textContent = `${minutes}:${seconds}`;
  //   console.log(`${minutes}:${seconds}`);
  time--;
  if (time === -1) {
    clearInterval(countDownTimer);
  }
}, 1000);
