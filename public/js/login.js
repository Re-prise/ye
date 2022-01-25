function fetchComments() {
    var request = new XMLHttpRequest();

    request.open('GET', user_url, true);

    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
        comment_array = JSON.parse(request.responseText);
        console.log(comment_array);
    };
    request.send();
}

function simpleAuthAlgo () {
        var username = login_array[count].username;
        var password = login_array[count].password;

        
        // String[] usernames = {"user1", "user2", "user3"};  //replace this w the username array from ur db
        // String[] passwords = {"password1", "password2", "password3"}; //replace this w the password array from ur db

        usernameinput //replace this w wtv u gg key in for ur username textbox
        passwordinput //replace this w wtv u gg key in for ur password textbox

        for (var count=0; count < username.length; count++) {
            if (document.getElementById('username').value == username[count]){
                console.log("Username matches");
                if (document.getElementById('password').value == password[count]){
                    console.log("Welcome! You're now authenticated");
                    //add ur localstorage thingy here
                    //redirect ur user to the home page
                    return;
                }
                else{
                    console.log("Invalid password!");
                    return;
                }
            }
            else if (count == username.length-1) {
                console.log("Invalid username/password!");
                return;
            }
        }
}

