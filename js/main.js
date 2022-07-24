function signup(e){
// e.preventDefault();

//get values form fields
var name = document.getElementById("username").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

var user={
    name: name,
    email:email,
    password:password,
}
 console.log("sign Up:", user);
 var json = JSON.stringify(user);
 localStorage.setItem(name,json)
 console.log("local storage: ",json);
}
function login(e){
    
var name = document.getElementById("username").value;
var password = document.getElementById("password").value;
var message  = document.getElementById("result");
var user = localStorage.getItem(name);
var data = JSON.parse(user);
// console.log(data);

if(data.name == name && data.password == password ){
    window.alert("Logged I Succesfuly")
    window.location.href="/dashboard.html";
}else{
    window.location.href="/login.html";
    window.alert("invalid Name Or Password")
    
}

}