name = localStorage["login"];
pass = localStorage["pass"];

url = "https://1.1.1.1/login.html";
data = "buttonClicked=4&err_flag=0&err_msg=&info_flag=0&info_msg=&network_name=Guest+Network&username="+name+"&password="+pass;
loadXMLDoc();
//response;


function loadXMLDoc(){
    var xmlhttp;
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open("POST",url,false);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(data);

    if( xmlhttp.status == 200 ){
      document.getElementById("main").innerHTML = "<h1>Logged In <img src='img/logo.png'></h1>";
    } else {
      document.getElementById("main").innerHTML = "<h1>Failure while logging in</h1>";
    }
}
