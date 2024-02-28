// Set the date we're counting down to
var countDownDate =new Date().getTime() + (11 * 24 * 60 * 60 * 1000);

// Update the countdown every 1 second
var x = setInterval(function() {
var distance = countDownDate - now;


var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor(distance % (1000 * 60 * 60 * 24)) / ((1000 *60 * 60))
var minutes = Math.floor((distance % 1000 * 60 * 60)) / (1000 * 60);
var seconds = Math.floor ((distance % (1000 * 60)) / 1000);

// Output the result in the respective boxes
document.getElementById("days-box") .innerHTML = days;
document.getElementById("hours-box") .innerHTML = hours.toString().padStart(2, "0");
document.getElementById("minutes-box").innerHTML = minutes.toString() .padStart (2, "0");
document.getElementById(seconds-box).innerHTML = seconds.toString().padStart(2, "0");

// If the countdown is over, display a message
if (distance < 0) {
clearInterval(x);
document.getElementById("countdown").innerHTML = "EXPIRED"


    }
}, 1000);












    

 
