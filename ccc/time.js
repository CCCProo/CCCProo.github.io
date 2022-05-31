
// Set the date we're counting down to
var countDownDate = new Date("May 16, 2022 00:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "д" + " :" + hours + "ч"+" :"
    + minutes + "м" +" :" + seconds + "c ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// Set the date we're counting down to
var countDownDate = new Date("May 16, 2022 00:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo2").innerHTML = days + "д" + " :" + hours + "ч"+" :"
    + minutes + "м" +" :" + seconds + "c ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("demo2").innerHTML = "EXPIRED";
    }
}, 1000);



// Set the date we're counting down to
var countDownDate = new Date("May 16, 2022 00:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo20").innerHTML = days + "д" + " :" + hours + "ч"+" :"
    + minutes + "м" +" :" + seconds + "c ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("demo20").innerHTML = "EXPIRED";
    }
}, 1000);

// Set the date we're counting down to
var countDownDate = new Date("May 16, 2022 00:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo1").innerHTML = days + "д" + " :" + hours + "ч"+" :"
    + minutes + "м" +" :" + seconds + "c ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("demo1").innerHTML = "EXPIRED";
    }
}, 1000);