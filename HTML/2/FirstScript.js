const buttonToNavigateGoogle = document.getElementById("ButtonNavigateGoogle");
const buttonToClearLogin = document.getElementById("ButtonLoginClear");
const buttonToUsernameRequest = document.getElementById(
  "ButtonUsernameRequest"
);

var hasNumber = /\d/;

buttonToNavigateGoogle.addEventListener("click", NavigateToGoogle);
buttonToClearLogin.addEventListener("click", ClearLoginInformation);
buttonToUsernameRequest.addEventListener("click", GetUsernameByPopup);

function NavigateToGoogle() {
  window.location.href = "http://google.com";
}

function ClearLoginInformation() {
  document.getElementById("TextFieldName").value = "";
  document.getElementById("TextFieldPassword").value = "";
}

function GetUsernameByPopup() {
  CheckUsername(prompt("Input username, please"));
}

function CheckUsername(username) {
  if (hasNumber.test(username)) {
    username = ReverseString(username);
  } 
  else {
    username = AlternateString(username);
  }
  alert("Changed username is " + username);
}

function ReverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function AlternateString(str) {
  var strArray = str.split("");
  for (var i = 0; i < strArray.length; i++) {
    if (i % 2 == 0) {
      strArray[i] = strArray[i].toUpperCase();
    } 
    else {
      strArray[i] = strArray[i].toLowerCase();
    }
  }
  return strArray.join("");
}
