document.onload = init();

function init(){
  restoreOptions();
}


function restoreOptions() {
  var login = localStorage["login"];
  var pass = localStorage["pass"];
  if(login != null && pass != null){
    document.getElementById("name").value = login;
    document.getElementById("password").value = pass;
  }
}

document.querySelector('#submit').addEventListener('click', saveOptions);

function saveOptions() {
  var login = document.getElementById("name").value;
  var pass = document.getElementById("password").value;
  localStorage["login"] = login;
  localStorage["pass"] = pass;
  document.getElementById("status").innerHTML = "Saved!";
}
