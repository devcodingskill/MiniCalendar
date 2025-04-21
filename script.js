const date = document.querySelector("#date");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  
const today = new Date();
// console.log(today);

date.innerHTML = today.getDate()<9 ? "0" + today.getDate() : today.getDate(); // getDate() returns 1-31, so we add 0 to make it 01-31
day.innerHTML = weekdays[today.getDay()]; // getDay() returns 0-6, so we add 1 to make it 1-7 
month.innerHTML = months[today.getMonth()]; // getMonth() returns 0-11, so we add 1 to make it 1-12
year.innerHTML = today.getFullYear(); // getFullYear() returns the full year (4 digits)
