var array = ["Homepage", "About Us", "Contact"];
var array1 = ["Email", "Mobile", "Fax"];

function dropdownList(array, div) {
  var label = document.createElement("label");
  var select = document.createElement("select");
  for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.innerHTML = array[i];
    select.appendChild(option);
  }

  var body = document.querySelector("body");
  var node = document.createElement(div);
  body.prepend(node);
  node.prepend(label);
  node.appendChild(select);
}

dropdownList(array1, "div");
dropdownList(array, "div");
