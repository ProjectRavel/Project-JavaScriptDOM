const years = [
  "Januari",
  "Febuari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const weekdays = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jum'at",
  "Sabtu",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline-formal");
const timeouts = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2025, 2, 28, 1, 0, 0);

console.log(futureDate);

const year = futureDate.getFullYear();
const month = years[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];

console.log(month);

giveaway.textContent = `Giveaway berakhir pada ${day} ${date} ${month} ${year}`;

function getRemainingTime() {
  const futureTime = futureDate.getTime();
  const today = new Date().getTime();
  const remaining = futureTime - today;
  // 1s = 1000 ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24h

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecs = 1000;

  const days = Math.floor(remaining / oneDay);
  const hours = Math.floor((remaining % oneDay) / oneHour);
  const minutes = Math.floor((remaining % oneHour) / oneMinute);
  const secs = Math.floor((remaining % oneMinute) / oneSecs);

  const values = [days, hours, minutes, secs];

  timeouts.forEach((timeout, index) => {
    timeout.innerHTML = values[index];
    if (remaining < 0) {
        timeout.parentElement.parentElement.remove()
    }
  });
}
setInterval(() => {
  getRemainingTime();
}, 1000);
