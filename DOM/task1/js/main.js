

function setBgColor () {
    var secondList = document.querySelector("ul:nth-child(2)");
    secondList.className = "bg-color";
}
setBgColor();



function selectLi () {
    var lists = document.querySelectorAll("ul li");
    lists.forEach(function (string) {
        string.className = "bg-li-color";
    });
}
selectLi();



function thirdList () {
    var third = document.querySelectorAll("ul:nth-child(3) li");
    third.forEach (function(string) {
        string.className = "third-list";
    })
}
thirdList();