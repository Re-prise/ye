$(document).ready(function () {
  var getUser = new XMLHttpRequest();
  
  getUser.open("POST", "/getUser");
  getUser.setRequestHeader("Content-Type", "application/json");
  getUser.onload = function () {
    var profile = JSON.parse(getUser.responseText);
    console.log(getUser.responseText);
  
    email_add = profile[0].email_add;
    username = profile[0].username;
    First_name = profile[0].First_name;
    Last_name = profile[0].Last_name;
    Gender = profile[0].Gender;
    Mobile_Num = profile[0].Mobile_Num;
    Address = profile[0].Address;

    userId = profile[0].userId;
    localStorage.setItem("userId", userId);
    localStorage.setItem("username", username);
  
  
    document.getElementById("usernametop").innerHTML = username;
      
    };
  
  var payload = {token: token}; 
  getUser.send(JSON.stringify(payload));
});