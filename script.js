var dest = new Date("March 31,2021,10:00:00").getTime();
var y =setInterval(function(){
var now =  new Date().getTime();
var diff = dest - now;
var days= Math.floor(diff /(24*60*60*1000));
console.log(days);
var hours = Math.floor((diff %(1000*60*60*24)) /(1000*60*60));
console.log(hours);
var minutes = Math.floor((diff %(1000*60*60)) /(1000*60));
console.log(minutes);
var seconds = Math.floor((diff %(1000*60)) /(1000));
console.log(minutes);
document.getElementById("shapespan1").innerHTML = days;
document.getElementById("shapespan2").innerHTML = hours;
document.getElementById("shapespan3").innerHTML = minutes;
document.getElementById("shapespan4").innerHTML = seconds;

},1000);


