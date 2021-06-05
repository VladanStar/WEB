function validateForm () {
    var input = document.getElementsByTagName("input");
    for (var i = 0; i < input.length; i++) {
        if (input[i].required && input[i].value === "") {
            console.log(input[i]);
            input[i].className = "red-color";
        }
    }
};

validateForm();



