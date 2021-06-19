var interval;
var body = document.querySelector('body');
var automatic = document.querySelector("#turn-off-btn");

var handler = function () {
  body.classList.toggle("active");
}

var turnOffHandler = function () {
    if(!interval){
   automatic.textContent = "Turn Off";
   interval = setInterval(handler,500);
    
}
else {
    automatic.textContent = "Turn On";
    clearInterval(interval);
    interval = undefined;
}
}