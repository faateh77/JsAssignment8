var minutes ,seconds,hours;
var startBtn = document.getElementById("startbtn");
var stopBtn = document.getElementById("stopbtn");
var resetBtn = document.getElementById("resetbtn");
var displayminutes =document.getElementById("displayminutes");
var displayhours= document.getElementById("displayhours");
var displayseconds= document.getElementById("displayseconds");

var interval;
minutes = 0;
seconds = 0;
hours = 0
function intervalValues(){
    displayhours.innerHTML =hours;
    displayminutes.innerHTML =minutes;
    displayseconds.innerHTML =seconds;
}
function timer(){
  seconds++;
  if(seconds==60){
    minutes++;
    seconds=0;
  }
  else if(minutes==59){
    hours++;
    minutes = 0;
  }
intervalValues();
}
function startstopwatch(){
interval= setInterval(function(){
   timer(); 
},1000)}


function stopwatch(){
  clearInterval(interval);
}
function resetwatch(){
    seconds = 0;
    minutes = 0;
    hours = 0;
    stopwatch();
    intervalValues();
}