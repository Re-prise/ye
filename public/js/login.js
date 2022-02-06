function login() {

    var loginUser = new XMLHttpRequest(); // new HttpRequest instance to send comment

    loginUser.open("POST", "/loginUser", true); //Use the HTTP POST method to send data to server

    loginUser.setRequestHeader("Content-Type", "application/json");
    username = document.getElementById("loginusername").value;
    password = document.getElementById("loginpassword").value;
    localStorage["username"] = username;
    loginUser.onload=function () {
        var token = JSON.parse(loginUser.responseText);
        if (token.result != "Invalid"){
            localStorage.setItem("token", token.result);
            alert("Welcome! " + localStorage["username"])
            window.location.href = "index.html";
            $('#displaytopusername').show();
            document.getElementById('newComment').style.display("block")
        } else{
            alert("Invalid Login Details")
        }  
    }
    var payload = {username:username, password:password}
    loginUser.send(JSON.stringify(payload)); 
}

function addUser() {


    username = document.getElementById("signinusername").value;
    password = document.getElementById("signinpassword").value;
    email_add = document.getElementById("signinemail").value;
    First_name = document.getElementById("signinfirstname").value;
    Last_name = document.getElementById("signinlastname").value;
    Mobile_Num = document.getElementById("signinphnumber").value;
    Address = document.getElementById("signinaddress").value;
    Gender = document.getElementById("signingender").value;


    var registerUser = new XMLHttpRequest(); // new HttpRequest instance to send comment

    registerUser.open("POST", "/addUserDetails", true); //Use the HTTP POST method to send data to server

    registerUser.setRequestHeader("Content-Type", "application/json");
    registerUser.onload = function () {
        alert("Success, please log in")
        window.location.href = "login.html";
    }

    var payload = {username:username, password:password, email_add:email_add, First_name:First_name, Last_name:Last_name, Mobile_Num:Mobile_Num, Address:Address, Gender:Gender}
    console.log(JSON.stringify(payload));
    registerUser.send(JSON.stringify(payload)); 
}

function logout(){
    var response = confirm("Are you sure you want to log out?")
    if (response == true){
        $('#login').show();
        $('#dropdownProfile').hide();
        $('#displaytopusername').hide();
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("username");
    }
}