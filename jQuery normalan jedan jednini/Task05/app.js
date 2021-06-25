$(function(){

    var field = $(".field");
    var player = $(".player");
    var btn = $("a");

    var clickHandler = function(event) {  
        var top = event.clientY - player.height()/2;
        var left = event.clientX - player.width()/2;
        player.offset({top:top,left:left})
    }

    field.click(clickHandler);

    var boolean = true;

    btn.click(function(){
        if(boolean){
            field.unbind();
            btn.text('Start Moving')
            boolean = false;
        } else if(!boolean){
            field.click(clickHandler);
            btn.text('Stop Moving')
            boolean = true;
        }
    });
})





