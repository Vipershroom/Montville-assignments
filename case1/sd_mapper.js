/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Lucas Cerqueira
   Date:   4/28/2022

*/

"use strict"

const timeStamp = document.getElementById("timeStamp")

const planisphere = document.getElementById("planisphere")

let thisTime = new Date()

let timeStr = thisTime.toLocaleTimeString()

timeStamp.innerHTML = timeStr

let thisHour = thisTime.getHours() 

let thisMonth = thisTime.getMonth()

let mapNum = (2 * thisMonth + thisHour) / 24

let imgStr = `<img src='sd_skyMap${mapNum}.png />'`

planisphere.insertAdjacentHTML("afterbegin", imgStr)