var path = document.querySelector('.path');
var mario = document.querySelector('.mario');
var body = document.body;
var x = 0;
var moveBg;


window.addEventListener('keydown', function (e) {
    
    if(e.key == 'ArrowRight') {
        if(mario.getAttribute('src') === './SuperMarioAssets/mario.png') {
            mario.removeAttribute('src');
            mario.setAttribute('src', './SuperMarioAssets/mario_running.gif');
            moveBg = setInterval(function() {
                
                x-=1;
                path.style.backgroundPosition = x + 'px bottom';
                
            },1)
            
        }
        
    }
    
    
})

window.addEventListener('keyup', function (e) {
    
    if(e.key == 'ArrowRight') {
        mario.removeAttribute('src');
        mario.setAttribute('src', './SuperMarioAssets/mario.png');
        clearInterval(moveBg);
    }
})

