var minutes= document.getElementById("minutes");
var seconds= document.getElementById("seconds");
var hours = document.getElementById("hours");
var startbtn = document.getElementById("start");
var stopbtn = document.getElementById("stop");
var interval;
var displayminute, displaysecond
var time = new Date();
var minutes=4;
var seconds=59;
// function setTime(){
// var settime = (time.setMinutes() + time.setSeconds());
//   return settime;  
// }
function  intervalvalue(){
    minutes.innerHTML = displayminute;
    seconds.innerHTML = displaysecond;
}
function timingprocess(){
    seconds--;
    if(seconds==0){
        minutes--;
        second=59;
    }
   else if(seconds==0 && minutes == 0 ){
      seconds = 0;
      minutes = 0;
   }
    intervalvalue();
}
function startimer(){
    // setTime();
  interval=   setInterval(function(){
    timingprocess();
    // console.log(interval);
     },1000);
}
function stoptimer(){
   clearInterval(interval);   
}