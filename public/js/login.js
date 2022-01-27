// function login() {
//         var username = login_array[count].username;
//         var password = login_array[count].password;


//         usernameinput //replace this w wtv u gg key in for ur username textbox
//         passwordinput //replace this w wtv u gg key in for ur password textbox

//         for (var count=0; count < username.length; count++) {
//             if (document.getElementById('username').value == username[count]){
//                 console.log("Username matches");
//                 if (document.getElementById('password').value == password[count]){
//                     console.log("Welcome! You're now authenticated");
//                     //add ur localstorage thingy here
//                     //redirect ur user to the home page
//                     return;
//                 }
//                 else{
//                     console.log("Invalid password!");
//                     return;
//                 }
//             }
//             else if (count == username.length-1) {
//                 console.log("Invalid username/password!");
//                 return;
//             }
//         }
// }

function addUser() {
    username = document.getElementById("signinusername").value;
    password = document.getElementById("signinpassword").value;
    email_add = document.getElementById("signinemail").value;

    var payload = {username:username, password:password, email_add:email_add}
    console.log(username, password, email_add)

    var registerUser = new XMLHttpRequest(); // new HttpRequest instance to send comment

    registerUser.open("POST", "/addUserDetails", true); //Use the HTTP POST method to send data to server

    registerUser.setRequestHeader("Content-Type", "application/json");
    registerUser.onload = function() {
        setTimeout(function () {
            window.location.href = "index.html";
          }, 1000);
        console.log("register ok");
    }

    console.log(JSON.stringify(payload));
    registerUser.send(JSON.stringify(payload)); 
}
