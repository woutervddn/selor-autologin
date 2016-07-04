name = localStorage["login"];
pass = localStorage["pass"];

url = "https://1.1.1.1/login.html";
//data = "user="+name+"&password="+pass+"&cmd=authenticate&login=Log In";
data = "buttonClicked=4&err_flag=0&err_msg=&info_flag=0&info_msg=&network_name=Guest+Network&username="+name+"&password="+pass;

//window.alert(data);
loadXMLDoc();
response;
function loadXMLDoc(){
    var xmlhttp;
    //if (window.XMLHttpRequest){
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    //}
    //else{
      // code for IE6, IE5
      //xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    //}

    xmlhttp.open("POST",url,false);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(data);
    //document.getElementById("main").innerHTML = xmlhttp.responseText;
    response = xmlhttp.responseText;
    console.log(response);
}
