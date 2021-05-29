console.log("Hello World again!!!");

(function getall() {
  console.log("platform: ", window.navigator);
})();

(function getPlatform() {
  console.log("platform: ", window.navigator.platform);
})();

//getPlatform();
function browserVersion() {
  console.log("browser: ", window.navigator.appVersion);
}

browserVersion();

function browserCompany() {
  console.log("company:", window.navigator.vendor);
}
browserCompany();

function isOnline() {
  var status = "";
  if (window.navigator.onLine === true) {
    status = "status: online";
  } else {
    status = "status: offline";
  }
  return status;
}
console.log(isOnline());

function windowBrowserRes() {
  console.log("maxPossibile height: ", window.screen.height);
  console.log("maxPossiblie width: ", window.screen.width);
}
windowBrowserRes();

function maxPossibile() {
  console.log("curren height: ", window.screen.availHeight);
  console.log("current width: ", window.screen.availWidth);
}
maxPossibile();

///
(function getAllScreen() {
  console.log("platform: ", window.screen);
})();

(function getAllLocation() {
  console.log("platform: ", window.location);
})();
function domainName() {
  console.log("domain: ", window.location.hostname);
}
domainName();

function protocolName() {
  console.log("protocol: ", window.location.protocol);
}
protocolName();

function parametarsURL() {
  console.log("parametars one: ", window.location.origin);
  console.log("parameters two: ", window.location.pathname);
}
parametarsURL();

//  function reloadURL () {
//    window.location.reload();
//  }
//  reloadURL();

// function redirect (Vladan) {
//     window.location.replace(Vladan);
// }
// redirect('https://github.com/VladanStar');


function setName() {
  window.localStorage.setItem("Name", "Vladan");
  window.localStorage.setItem("Age", "48");
}
setName();


function getName() {
  console.log(window.localStorage.getItem("Name"));
}
getName();


function getAge() {
  if (window.localStorage.getItem("Age")) {
    console.log(window.localStorage.getItem("Age"));
 
  } else {
       console.log("There is no data");
    
  }
}
getAge();

function clearData() {
    window.localStorage.clear();
  }
clearData();
 

 function sessionData() {
   window.sessionStorage.setItem("Pet", "Cat");
}
sessionData();

//************************ */
 function setSesName() {
   window.sessionStorage.setItem("Name", "Vladan");
   window.sessionStorage.setItem("Age", "48");
 }
 setSesName();
/************* */
 function getSesName() {
   console.log(window.sessionStorage.getItem("Name"));
 }
 getSesName();
/****** */
function removeSessInfo(a) {
 window.sessionStorage.removeItem("Name");
}
removeSessInfo("Name");

/********************** */
function getSessName() {
  if (window.sessionStorage.getItem("Name")) {
    console.log(window.sessionStorage.getItem("Name"));
  } else {
    console.log("There is no data");
  }
}
getSessName();
/******************* */

function goBack() {
  window.history.go(-2);
}
goBack();
//window.history

window.history.forward();
window.history.back();
 








//  function greetMsg() {
//    window.alert("Hello user!");
//  }
//  greetMsg();

//  function userQuestion() {
//    var msg = window.prompt("How old are you?");

//    if (window.confirm("We will provide this answer now " + msg)) {
//      window.alert("Success");
//    }
//  }
//  userQuestion();