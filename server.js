var express = require("express");

var restController = require('./controllers/restController');
var commentController = require('./controllers/commentController');
var userController = require('./controllers/userController');
var bookmarkController = require('./controllers/bookmarkController');
var cuisineController = require('./controllers/cuisineController');
var app = express();

app.use(express.static("./public"));
app.use(express.json());

//Restaurant Related vv
app.route('/restaurant').get(restController.getAllRestaurant);  //GETS all restaurants' info (maybe implement function that gets rest info by ID)
app.route('/getRestaurant/:search').get(restController.getRestaurantBySearch);  //Search through restaurants by rest_name
app.route('/getRestaurantByLocation/:zone').get(restController.getRestaurantByLocationZone); //GETS restaurants by Location(zone)
app.route('/getRestaurantByPrice/:price').get(restController.getRestaurantByPrice);   //GETS restaurants by Price

//Comment Related vv
app.route('/comments').get(commentController.getAllComments);   //GETS all comments
app.route('/addComments').post(commentController.addComment);   //ADDS a comment
app.route('/updateComments/:_id').put(commentController.updateComment);  //Updates a comment by comment ID
app.route('/deleteComments/:_id').delete(commentController.deleteComment);   //Deletes a comment by comment ID
app.route('/getCommentsOrderedUpvotes/:restId').get(commentController.getCommentsOrderedUpvotes); //GETS all comments from a restaurant and orders them by upvotes
app.route('/getCommentsByDatePosted/:restId').get(commentController.getCommentsByDatePosted);   //Gets all comments or a restaurant sorted by earliest to latest
app.route('/getCommentCount/:restId').get(commentController.getCommentCount); //GETS the total count of the reviews under the restaurant
app.route('/getAllCommentsByRestOrderDate').get(commentController.getAllCommentsByRestOrderedDate);

//User Related vv
app.route('/userDetails').get(userController.getAllUser);   //GETS all user info
app.route('/changePassword/:userId').put(userController.changePassword);    //Changes user password by user ID
app.route('/addUserDetails').post(userController.addUserDetails);   //ADDS a user
app.route('/deleteUser/:userId').delete(userController.deleteUser); //DELETES a row of user details by userId
app.route('/getPasswordByUsername/:username').get(userController.getPasswordByUser);    //Gets a User's Password by Username
app.route('/loginUser').post(userController.loginUser);

//Bookmark Related vv
app.route('/addBookmark').post(bookmarkController.addBookmark); //ADDS a restId and userID to Bookmarks
app.route('/removeBookmark/:_id').delete(bookmarkController.removeBookmark); //REMOVES a restId and userID to Bookmarks
app.route('/bookmarks/:userId').get(bookmarkController.getAllBookmarks);    //GETS all bookmarks by User

//Cuisine Related vv
app.route('/getCusineZonePriceAvgRatingOfRestaurant/:restId').get(cuisineController.getCuisineZonePriceAvgRatingOfRestaurant);   //GETS cuisine, zone, price and avg rating of a restaurant
app.route('/getRestaurantByCuisine/:cusine').get(cuisineController.getRestaurantbyCuisine);    //GETS all restaurant by cuisine





app.listen(8080, "127.0.0.1");
console.log("web server is running @ http://127.0.0.1:8080")