const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let firstH2 = document.querySelectorAll("h2")[0];
let secondH2 = document.querySelectorAll("h2")[1];
let futureDate1 = new Date(2022, 9, 28, 17, 55, 20);
let futureTime1 = futureDate1.getTime();
let futureDate2 = new Date(2022, 10, 17, 13, 55, 00);
let futureTime2 = futureDate2.getTime();

let paras = document.querySelectorAll(".timeLeft p");
console.log(paras);
let div = document.querySelectorAll(".timeLeft");
console.log(div);
let saleEnds = document.querySelectorAll("div + p");
console.log(saleEnds);
function format(n) {
  if (n < 10) return `0${n}`;
  return n;
}
firstH2.innerHTML = endOn(futureDate1);
secondH2.innerHTML = endOn(futureDate2);

function getRemainingTime(time, n, x) {
  const today = new Date().getTime();

  const t = time - today;
  if (t < 2) {
    div[x].classList.add("ends");
    saleEnds[x].classList.remove("sale");
  }
  let day = Math.floor(t / 86400000);
  let h = Math.floor((t % 86400000) / 3600000);
  let m = Math.floor((t % 3600000) / 60000);
  let s = Math.floor((t % 60000) / 1000);
  let times = [day, h, m, s];
  for (let i = 0; i < times.length; i++) {
    paras[i + n].innerHTML = format(times[i]);
  }
}
let a = setInterval(function () {
  getRemainingTime(futureTime1, 0, 0);
}, 1000);
let b = setInterval(function () {
  getRemainingTime(futureTime2, 4, 1);
}, 1000);

function endOn(item) {
  let day = item.getUTCDay();
  let date = item.getDate();
  let month = item.getMonth();
  let year = item.getUTCFullYear();
  let hour = item.getUTCHours();
  let minute = item.getMinutes();
  if (item == futureDate1)
    return `Giveaway Ends On ${weekdays[day]}, ${date} ${
      months[month]
    } ${year} ${hour + 6}:${minute}am`;
  return `Sale Ends On ${weekdays[day]}, ${date} ${months[month]} ${year} ${
    hour + 6
  }:${minute}am`;
}
