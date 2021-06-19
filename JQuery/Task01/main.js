$(function () {
    $("li:first").toggleClass('redBorder');
    $("li").addClass("text");
    $("li.active").addClass("fontColor");
    $("li:nth-child(3)").toggleClass("bgcolor");
});