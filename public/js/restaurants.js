//This function is to call the rest api and get all the restaurants
function getRestData() {    
	var request = new XMLHttpRequest();    
	request.open('GET', rest_url, true);    
	//This function will be called when data returns from the web api    
	request.onload = function() {        
	//get all the rest records into our rest array        
	rest_array = JSON.parse(request.responseText);        
	//Fetch the comments as well        
	fetchComments();
	console.log(rest_array) // output to console   
    
    displayRestaurants()
};    

//This command starts the calling of the rest web api    
request.send();}

function displayRestaurants() {
    var table = document.getElementById("restTable");

    table.innerHTML = "";
    totalRest = rest_array.length;
    for (var count = 0; count < totalRest; count++) {
        var thumbnail = rest_array[count].rest_thumbnail;
        var restName = rest_array[count].rest_name;
	var cell = '<div class="card col-md-3"><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
    <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + count + '" onClick="showRestComments(this)"></i>\
    <a><h5 style="padding-left:30px;cursor:pointer;" data-toggle="modal" data-target="#restModal" class="card-title" item="' + count +'"onClick="showRestDetails(this)">' + restName + '</h5></a></div>\
    </div>'
        table.insertAdjacentHTML('beforeend', cell);
    }
}

function showRestDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    localStorage["restId"] = rest_array[item].restId;
    document.getElementById("restName").textContent = rest_array[item].rest_name;
    document.getElementById("restContact").textContent = rest_array[item].rest_contact;
    document.getElementById("restLocation").textContent = rest_array[item].rest_location;
    document.getElementById("restHrs").textContent = rest_array[item].rest_hrs;
    document.getElementById("restWebsite").textContent = rest_array[item].webLink;
    document.getElementById("restAbout").textContent = rest_array[item].rest_about;
    document.getElementById("restThumbnail").src = rest_array[item].rest_thumbnail;
}

function toWebsite() {
    var checktext = "No website could be found for this particular restaurant!"
    if (rest_array[currentIndex].webLink == checktext){
        alert("There is no available website!");
    } else {
        window.open(rest_array[currentIndex].webLink, "_blank");
    }

}
