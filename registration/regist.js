let name = prompt("Как тебя зовут?"," ");
function check()
{
    let login = document.getElementById("login");
    let password = document.getElementById("password");
    let password1 = document.getElementById("password1");
    let email = document.getElementById("email");
    let number = document.getElementById("number");

    if(login.value == ""){
    document.getElementById('errorMessage').innerHTML+="Ваш логин не заполнен<br>";
}
if(password.value == ""){
    document.getElementById('errorMessage').innerHTML+="Ваш пароль не заполнен<br>";
}
if(password1.value == ""){
    document.getElementById('errorMessage').innerHTML+="Ваш пароль не подтвержден<br>";
}
if(email.value == ""){
    document.getElementById('errorMessage').innerHTML+="Ваш email не заполнен<br>";
}
if(number.value == ""){
    document.getElementById('errorMessage').innerHTML+="Ваш номер телефона не заполнен<br>";
}
   else 
   alert("Добро пожаловать," +name+"!");
}