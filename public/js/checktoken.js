$(document).ready(function (){

    var token = localStorage.getItem("token");
    if (token != null){
        $('#login').hide();
        $('#dropdownProfile').show();
    } else {
        $('#displaytopusername').hide();
    }
})