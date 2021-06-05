function bgColor () {
    var myList = document.querySelector("div").nextElementSibling.firstElementChild.firstElementChild;
    myList.className = "active";
}
bgColor();

function removeClass () {
    var classRemove = document.getElementsByClassName("active");
    classRemove[0].classList.remove("active");
}

removeClass();

function changeClass(){
    var firstLi = document.querySelector("div").firstElementChild.firstElementChild;
    firstLi.className = "active";
}
changeClass();