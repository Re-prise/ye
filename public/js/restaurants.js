//This function is to call the rest api and get all the restaurants
function getRestData() {    
	var request = new XMLHttpRequest();    
	request.open('GET', rest_url, true);    
	//This function will be called when data returns from the web api    
	request.onload = function() {        
	//get all the rest records into our rest array        
	rest_array = JSON.parse(request.responseText);        
	//Fetch the comments as well        
	//fetchComments();
	console.log(rest_array) // output to console        
};    

//This command starts the calling of the rest web api    
request.send();}

function displayRestaurants() {
    var table = document.getElementById("restaurantTable");
    var restCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRest = rest_array.length;
    for (var count = 0; count < totalRest; count++) {
        var thumbnail = rest_array[count].rest_thumbnail;
        var restName = rest_array[count].rest_name;
	var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + count + '" onClick="showResttComments(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#restModal" class="card-title" item="' + count + '" onClick="showRestDetails(this)">' + restName + '</h5></div>\
</div>'
        table.insertAdjacentHTML('beforeend', cell);
        restCount++;
    }
}

message = restCount + " Restaurants " + category;
document.getElementById("summary").textContent = message;
document.getElementById("parent").textContent = "";

function listAllRestHome() {
    category = "Available";
    displayRestaurants(category);
    document.getElementById("homeMenu").classList.add("active");
}


