$(document).ready(function () {
  var getdisplayprofile = new XMLHttpRequest();
  var token = localStorage.getItem("token");
  getdisplayprofile.open("POST", "/getUser");
  getdisplayprofile.setRequestHeader("Content-Type", "application/json");
  getdisplayprofile.onload = function () {
    var displayprofile = JSON.parse(getdisplayprofile.responseText);
    console.log(getdisplayprofile.responseText);

    email_add = displayprofile[0].email_add;
    username = displayprofile[0].username;
    First_name = displayprofile[0].First_name;
    Last_name = displayprofile[0].Last_name;
    Gender = displayprofile[0].Gender;
    Mobile_Num = displayprofile[0].Mobile_Num;
    Address = displayprofile[0].Address;
    userId = displayprofile[0].userId;


    document.getElementById("profileUsername").innerHTML = username;
    document.getElementById("profileEmail").innerHTML = email_add;
    document.getElementById("profileMobileno").innerHTML = Mobile_Num;
    document.getElementById("profileAddress").innerHTML = Address;
    document.getElementById("profileGender").innerHTML = Gender;
    
  };

  var payload = {token: token}; 
  getdisplayprofile.send(JSON.stringify(payload));
});

function deactivate(){
  var response = confirm("Are you sure you want to delete your account? This action is not reversible!");

  if (response == true) {
      var userID = localStorage["userId"]
      var delete_user_url = deluser_url + "/" + userID;
      var deactivateAcc = new XMLHttpRequest();
      deactivateAcc.open("DELETE", delete_user_url, true);
      deactivateAcc.onload = function() {
          logout()
          window.location.href = "index.html";
      };
      deactivateAcc.send();
    }
}
