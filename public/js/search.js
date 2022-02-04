function getSearchData() {
    var request = new XMLHttpRequest();
  
    request.open("POST", "/getRestaurant", true);
    request.setRequestHeader("Content-Type", "application/json");
    var search = document.getElementById("search").value;
  
    var payload = {search : search};
  
    request.send(JSON.stringify(payload));
    console.log("Payload is", JSON.stringify(payload))
  
    request.onload = function () {
      search_array = JSON.parse(request.responseText);
      console.log(search_array);

      var restTable = document.getElementById("restTable");

      restTable.innerHTML = "";
    
      var table = document.getElementById("restTable");
      var restCount = 0;
  
      totalRest = search_array.length;
      for (var count = 0; count < totalRest; count++) {
          var thumbnail = search_array[count].rest_thumbnail;
          var restName = search_array[count].rest_name;
      var cell = '<div class="card col-md-3"><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
      <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + count + '" onClick="showRestCommentsSearch(this)"></i>\
      <a><h5 style="padding-left:30px;cursor:pointer;" data-toggle="modal" data-target="#restModal" class="card-title" item="' + count +'"onClick="showRestDetailsSearch(this)">' + restName + '</h5></a></div>\
  </div>'
          table.insertAdjacentHTML('beforeend', cell);
          restCount++;
      }
    };
}

function showRestDetailsSearch(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    localStorage["restId"] = search_array[item].restId;
    document.getElementById("restName").textContent = search_array[item].rest_name;
    document.getElementById("restContact").textContent = search_array[item].rest_contact;
    document.getElementById("restLocation").textContent = search_array[item].rest_location;
    document.getElementById("restHrs").textContent = search_array[item].rest_hrs;
    document.getElementById("restWebsite").textContent = search_array[item].webLink;
    document.getElementById("restAbout").textContent = search_array[item].rest_about;
    document.getElementById("restThumbnail").src = search_array[item].rest_thumbnail;
}

function showRestCommentsSearch(element) {
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Reviews for " + search_array[item].rest_name;
    document.getElementById("commentBody").textContent = "";

    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].rest_name === search_array[item].rest_name) {
            document.getElementById("emptyComment").innerHTML = "";
            localStorage["restId"] = search_array[item].restId;
            selectedRestId = search_array[item].restId;
            var star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + comment_array[i].review + "</p>               \
                                    <p class='card-text' id='upvotes'" + i + ">" + comment_array[i].upvotes + "<img style='width: 20px' src='/images/thumbsup.png'/><p>\
                                    <small> By: " + comment_array[i].username + " @ " + comment_array[i].datePosted + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

            for (var j = 0; j < comment_array[i].rating; j++) {
                console.log(i);
                star += "<img style='width: 40px; padding-right: 5px; float: left;' src='images/ratingfilled.png'/>";
            }
            star += "<i id='removeComment" + i + "' style='float: right' class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' ></i>";
            star += "<i id='editComment" + i + "' style='float: right' class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" + i + "' onClick='editComment(this)' ></i>";
            
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
            if (comment_array[i].username != localStorage["username"]){
                document.getElementById("removeComment" + i).style.display="none";
                document.getElementById("editComment" + i).style.display="none";
            } else {
                document.getElementById("removeComment" + i).style.display="block";
                document.getElementById("editComment" + i).style.display="block";
            }
        }
    }
}