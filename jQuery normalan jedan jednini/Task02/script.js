$(function () {
    console.log($("li"));

    $("li:first").addClass("bottom-border");
    var li = $("li a").addClass("uppercase");
    $("li.active").attr("style", "color: red");
    var duzina = parseInt($("li").length / 2);
    $("li:eq(" + duzina + ")").attr("style", "background-color: red");

});