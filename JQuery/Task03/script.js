$(function () {
    var listOfImages = ["./images/cabin.png",
        "./images/cake.png",
        "./images/circus.png",
        "./images/game.png",
        "./images/safe.png"];

    var $div = $("<div>");
    listOfImages.forEach(function (imgSource) {
        var $img = $("<img>");
        $img.attr("src", imgSource);
        $img.width(parseInt((Math.random() * 200) + 100));
        $div.append($img);
    })

    $("body").append($div);
    
    var $imgSelected = $("img");
    $imgSelected.each(function(){
        if($(this).width() < 200){
            $(this).addClass("border");
        } else {
            return false;
        }
    })

})