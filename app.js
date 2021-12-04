const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const message = document.getElementById("mesaj");

var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();

    var distance = countDownDate - now;
    if(distance <= 0){
        message.innerHTML=("Yeni Yılda Mutluluklaar !!!!!")
        message.classList.toggle("message");
    }

    var days = Math.floor(distance / (1000*60*60*24))
    var hours = Math.floor(distance % (1000*60*60*24)/(1000*60*60))
    var minutes = Math.floor(distance %(1000*60*60)/(1000*60))
    var seconds = Math.floor(distance % (1000*60) /1000)

    if(days < 10){
        days = "0" + days
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }
    if(hours < 10){
        hours = "0" + hours
    }
    if(seconds < 10){
        seconds = "0" + seconds
    }

    day.innerHTML = days
    hour.innerHTML = hours
    minute.innerHTML = minutes
    second.innerHTML = seconds
}, 1000)

