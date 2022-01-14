"use strict"

var db = require('../db-connections');
class BookmarkDB{
    addBookmark(userId, restId, callback){
        var sql = "INSERT INTO restaurant_review.bookmark (userId, restId) VALUES (?, ?)";
        db.query(sql, [userId, restId], callback)
    }

    removeBookmark(_id, callback){
        var sql = "DELETE from restaurant_review.bookmark WHERE _id = ?"
        return db.query(sql, _id, callback);
    }

    getAllBookmarks(userId, callback){
        var sql = "SELECT user_details.username, restaurant.rest_name FROM bookmark INNER JOIN user_details ON bookmark.userId = user_details.userId INNER JOIN restaurant ON bookmark.restId = restaurant.restId WHERE  bookmark.userId = ?";
        db.query(sql, userId, callback);
    }
}

module.exports = BookmarkDB;