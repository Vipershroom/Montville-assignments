/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Lucas Cerqueira
   Date:   4/25/2022

*/
"use strict";

   /* Store the current date and time */
   var currentDate = new Date("May 23, 2018 14:35:05");

function runClock() {


   /* Store the current date and time */
   var currentDay = new Date();
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();

   /* Display the current date and time */

   document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

   /* Calculate the days until January 1st */
   var newYear = new Date("January 1, 2018");
   var nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentDay) / ( 1000 * 60 * 60 * 24);

   /* Calculate the hours left in the current day */

   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

   /* Calculate the minutes left in the current hour */

   var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   var secLeft = (minsLeft - Math.floor(minsLeft)) * 60;

   /* Display the time left until New Year's Eve */
   document.getElementById("days").textContent = 25;
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secLeft);

}

runClock();
setInterval(runClock, 1000);