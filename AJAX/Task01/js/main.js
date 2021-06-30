let countryElement = document.querySelector('#country');
let buttonElement= document.querySelector('#button');
let inputElement = document.querySelector('#searchIP');
let inputValue = inputElement.value;

function getCountry(){
    let request = new XMLHttpRequest();
    request.open('GET','http://www.geoplugin.net/xml.gp?ip=' + inputValue);

    request.onload = function(){
        if(request.status >=200 && request.status <300){
            let response = request.responseXML;
            let country = response.querySelector("geoplugin_countryName").textContent;
            countryElement.textContent = country;
        }
    }
    request.send();
}
buttonElement.addEventListener('click',getCountry);
// window.addeventListener('load', getcountry);
