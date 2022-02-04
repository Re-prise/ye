function fetchComments() {
    var request = new XMLHttpRequest();

    request.open('GET', comment_url, true);

    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
        comment_array = JSON.parse(request.responseText);
        console.log(comment_array);
    };
    request.send();
}

function showRestComments(element) {
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Reviews for " + rest_array[item].rest_name;
    document.getElementById("commentBody").textContent = "";

    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].rest_name === rest_array[item].rest_name) {
            document.getElementById("emptyComment").innerHTML = "";
            localStorage["restId"] = rest_array[item].restId;
            selectedRestId = rest_array[item].restId;
            var star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + comment_array[i].review + "</p>               \
                                    <p class='card-text' id='upvotes'" + i + ">" + comment_array[i].upvotes + "<button style='background-color: inherit; color: none; border:none; outline:none; cursor: pointer' onClick='upvote(this)'><img style='width: 20px' src='/images/thumbsup.png'/></button><p>\
                                    <small> By: " + comment_array[i].username + " @ " + comment_array[i].datePosted + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

            for (var j = 0; j < comment_array[i].rating; j++) {
                star += "<img style='width: 40px; padding-right: 5px; float: left;' src='images/ratingfilled.png'/>";
            }
            star += "<i id='removeComment" + i + "' style='float: right' class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' ></i>";
            star += "<i id='editComment" + i + "' style='float: right' class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" + i + "' onClick='editComment(this)' ></i>";
            
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
            
            if (comment_array[i].username != localStorage["username"]){
                $('#newComment').hide()
                document.getElementById("removeComment" + i).style.display="none";
                document.getElementById("editComment" + i).style.display="none";
            } else {
                $('#newComment').show()
                document.getElementById("removeComment" + i).style.display="block";
                document.getElementById("editComment" + i).style.display="block";
            }
        }
    }
}

function newComment() {
        rating = 0;
        document.getElementById("userreview").value = "";
        upvotes = 0;
}

// Submit or send the new comment to the server to be added.
function addComment() {
    var comment = new Object();
    comment.restId = localStorage["restId"]; // Movie ID is required by server to create new comment 
    comment.userId = localStorage["userId"]
    comment.rating = rating;
    comment.review = document.getElementById("userreview").value; // Value from HTML input text
    comment.datePosted = null; // Change the datePosted to null instead of taking the timestamp on the client side;
    comment.upvotes = upvotes;
    console.log(comment.restId, comment.userId, comment.review, comment.datePosted, comment.rating, comment.upvotes)

    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postComment.open("POST", addcomment_url, true); //Use the HTTP POST method to send data to server

    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function() {
        	console.log("new comment sent");
	fetchComments(); // fetch all comments again so that the web page can have updated comments.     
    };
    postComment.send(JSON.stringify(comment)); 
    console.log(JSON.stringify(comment))
}

function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var ratingsqs = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images to use black and white.
    for (let ratingsq of ratingsqs){
        ratingsq.setAttribute("src", ratingBWImage);
    }
    changeRatingImage(num, classTarget);
}


function changeRatingImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", ratingImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", ratingImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", ratingImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", ratingImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", ratingImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", ratingImage);
            rating = 5;
            break;
    }
}


function editComment(element) {
    var item = element.getAttribute("item");
    currentIndex = item;

    document.getElementById("edituserreview").value = comment_array[item].review;
    displayColorRatingsq('editsq', comment_array[item].rating);
    
}


function displayColorRatingsq(classname, num) {
    var sq = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of sq) {
    p.setAttribute("src", ratingBWImage);
    }
    changeRatingImage(num, classTarget);
    }
    

function updateComment() {
    var response = confirm("Do you want to edit this review?");
    if (response == true) {
    var edit_comment_url = editcomment_url + "/" + comment_array[currentIndex]._id;
    var updateComment = new XMLHttpRequest(); 
    updateComment.open("PUT", edit_comment_url, true); 
    updateComment.setRequestHeader("Content-Type", "application/json");
    comment_array[currentIndex].review = document.getElementById("edituserreview").value;
    comment_array[currentIndex].rating = rating;
    updateComment.onload = function() {
    fetchComments();
    };
    updateComment.send(JSON.stringify(comment_array[currentIndex]));
    }
}

function deleteComment(element) {
    var response = confirm("Are you sure you want to delete this comment?");

    if (response == true) {
        var item = element.getAttribute("item"); 
        var delete_comment_url = delcomment_url + "/" + comment_array[item]._id;
        var eraseComment = new XMLHttpRequest();
        eraseComment.open("DELETE", delete_comment_url, true);
        eraseComment.onload = function() {
            fetchComments();
        };
        eraseComment.send();
    }
}
