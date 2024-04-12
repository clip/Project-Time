window.onerror = function(message, source, lineno, colno, error) {
  console.log('An error occurred: ', message);
  console.log('Source: ', source);
  console.log('Line: ', lineno, ' Column: ', colno);
  console.log('Error object: ', error);
  // You can also send error details to a server or perform other actions here.
  return true; // Prevents the default browser error handling.
};

function Redirect() {
  window.open("https://www.github.com/clip", "_blank");
}

function Document1() {
  window.open('https://imgur.com/a/Zo8cmie', "_blank")
}

  var countDownDate = new Date("June 3, 2024 23:00:00").getTime();


  var x = setInterval(function() {
  

    var now = new Date().getTime();
      

    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Select the elements and update the --value property
    var daysSpan = document.querySelector(".grid .flex:nth-child(1) .countdown span");
    var hoursSpan = document.querySelector(".grid .flex:nth-child(2) .countdown span");
    var minutesSpan = document.querySelector(".grid .flex:nth-child(3) .countdown span");
    var secondsSpan = document.querySelector(".grid .flex:nth-child(4) .countdown span");
  
    if (daysSpan) daysSpan.style.setProperty('--value', days);
    if (hoursSpan) hoursSpan.style.setProperty('--value', hours);
    if (minutesSpan) minutesSpan.style.setProperty('--value', minutes);
    if (secondsSpan) secondsSpan.style.setProperty('--value', seconds);
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.querySelectorAll(".countdown span").forEach(span => {
        span.style.setProperty('--value', 0);
      });
    }
  }, 1000);
  

var countDownDate2 = new Date("June 3, 2024 00:00:00").getTime();


var x2 = setInterval(function() {

    var now2 = new Date().getTime();
      

    var distance2 = countDownDate2 - now2;
      
    // Time calculations for days, hours, minutes, and seconds
    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
      
    // Select the elements and update the --value property
    document.getElementById("days2").style.setProperty('--value', days2);
    document.getElementById("hours2").style.setProperty('--value', hours2);
    document.getElementById("minutes2").style.setProperty('--value', minutes2);
    document.getElementById("seconds2").style.setProperty('--value', seconds2);
      

    if (distance2 < 0) {
        clearInterval(x2);
        document.getElementById("days2").style.setProperty('--value', 0);
        document.getElementById("hours2").style.setProperty('--value', 0);
        document.getElementById("minutes2").style.setProperty('--value', 0);
        document.getElementById("seconds2").style.setProperty('--value', 0);
    }
}, 1000);

var countDownDate3 = new Date("May 30, 2024 00:00:00").getTime();

var x3 = setInterval(function() {
    // Get today's date and time
    var now3 = new Date().getTime();
      
    var distance3 = countDownDate3 - now3;
      
    // Time calculations for days, hours, minutes, and seconds
    var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
    var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
      
    // Select the elements and update the --value property
    document.getElementById("days3").style.setProperty('--value', days3);
    document.getElementById("hours3").style.setProperty('--value', hours3);
    document.getElementById("minutes3").style.setProperty('--value', minutes3);
    document.getElementById("seconds3").style.setProperty('--value', seconds3);
      

    if (distance2 < 0) {
        clearInterval(x2);
        document.getElementById("days3").style.setProperty('--value', 0);
        document.getElementById("hours3").style.setProperty('--value', 0);
        document.getElementById("minutes3").style.setProperty('--value', 0);
        document.getElementById("seconds3").style.setProperty('--value', 0);
    }
}, 1000);


var countDownDate4 = new Date("May 18, 2024 00:00:00").getTime();

var x4 = setInterval(function() {
    // Get today's date and time
    var now4 = new Date().getTime();
      

    var distance4 = countDownDate4 - now4;
      
    // Time calculations for days, hours, minutes, and seconds
    var days4 = Math.floor(distance4 / (1000 * 60 * 60 * 24));
    var hours4 = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes4 = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds4 = Math.floor((distance4 % (1000 * 60)) / 1000);
      
    // Select the elements and update the --value property
    document.getElementById("days4").style.setProperty('--value', days4);
    document.getElementById("hours4").style.setProperty('--value', hours4);
    document.getElementById("minutes4").style.setProperty('--value', minutes4);
    document.getElementById("seconds4").style.setProperty('--value', seconds4);
      

    if (distance2 < 0) {
        clearInterval(x2);
        document.getElementById("days4").style.setProperty('--value', 0);
        document.getElementById("hours4").style.setProperty('--value', 0);
        document.getElementById("minutes4").style.setProperty('--value', 0);
        document.getElementById("seconds4").style.setProperty('--value', 0);
        document.getElementById("expired2").style.display = "block";
    }
}, 1000);
   