function login() {

    var loginUser = new XMLHttpRequest(); // new HttpRequest instance to send comment

    loginUser.open("POST", "/loginUser", true); //Use the HTTP POST method to send data to server

    loginUser.setRequestHeader("Content-Type", "application/json");
    username = document.getElementById("loginusername").value;
    password = document.getElementById("loginpassword").value;

    loginUser.onload=function () {
        var token = JSON.parse(loginUser.responseText);
        console.log(token.result);
        if (token.result != "Invalid" && token.result != "Non-existent"){
            localStorage.setItem("token", token.result);
            window.location.href = "index.html";
            $('#displaytopusername').show();
            document.getElementById('newComment').style.display("block")
        } else{
            alert("Invalid Login Details")
            console.log("fail")
        }  
    }

    var payload = {username:username, password:password}
    loginUser.send(JSON.stringify(payload)); 
}

function addUser() {
    var registerUser = new XMLHttpRequest(); // new HttpRequest instance to send comment

    registerUser.open("POST", "/addUserDetails", true); //Use the HTTP POST method to send data to server

    registerUser.setRequestHeader("Content-Type", "application/json");
    registerUser.onload = function () {
        setTimeout(function () {
            // console.log("ok");
            alert("Success! Please Log In.")
            window.location.href = "login.html";
        }, 1000);
    }
    username = document.getElementById("signinusername").value;
    password = document.getElementById("signinpassword").value;
    email_add = document.getElementById("signinemail").value;
    First_name = document.getElementById("signinfirstname").value;
    Last_name = document.getElementById("signinlastname").value;
    Mobile_Num = document.getElementById("signinphnumber").value;
    Address = document.getElementById("signinaddress").value;
    Gender = document.getElementById("signingender").value;


    var payload = {username:username, password:password, email_add:email_add, First_name:First_name, Last_name:Last_name, Mobile_Num:Mobile_Num, Address:Address, Gender:Gender}
    console.log(JSON.stringify(payload));
    registerUser.send(JSON.stringify(payload)); 
}

function logout(){
    $('#login').show();
    $('#dropdownProfile').hide();
    $('#displaytopusername').hide();
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
}