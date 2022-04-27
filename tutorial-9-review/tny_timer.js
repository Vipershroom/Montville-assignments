/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Lucas Cerqueira
   Date:   4/27/2022

*/

"use strict";

/* Execute the function to run and display the countdown clock */
showClock()
setInterval("showClock()", 1000);

/* Function to display the countdown clock */
function showClock() {
   let thisDay = new Date();
   let localDate = thisDay.toLocaleDateString();
   let localTime = thisDay.toLocaleTimeString();

   /* Display the current date and time */
   document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span> <span>" + localTime + "</span>";

   /* Call function and store the date returned by the function j4date varialbe */
   let j4Date = nextJuly4(thisDay);
   j4Date.setHours(21,0,0);

   /* Calculat6e the days until July 4th */
   let days = (j4Date - thisDay) / (1000 * 60 * 60 * 24);

   /* Calculate the hours until July 4th */
   let hrs = (days - Math.floor(days)) * 24;

   /* Calculate the minutes and seconds until July 4th */
   let mins = (hrs - Math.floor(hrs)) * 60;
   let secs = (mins - Math.floor(mins)) * 60;

   /* Display the time left until July 4th */
   document.getElementById("dLeft").innerHTML = Math.floor(days);
   document.getElementById("hLeft").innerHTML = Math.floor(hrs);
   document.getElementById("mLeft").innerHTML = Math.floor(mins);
   document.getElementById("sLeft").innerHTML = Math.floor(secs);
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}