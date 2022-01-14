"use strict"

var db = require('../db-connections');
class UserDB{
    getAllUser(callback){
        var sql = "SELECT * from restaurant_review.user_details";
        return db.query(sql, callback);
    }

    changePassword(password, userId, callback){
        var sql = "UPDATE user_details SET password = ? WHERE userId = ?";
        return db.query(sql,[password, userId], callback);
    }

    addUserDetails(username, password, email_add, callback){
        var sql = "INSERT INTO user_details (username, password, email_add) VALUES (?, ?, ?)";
        return db.query(sql, [username, password, email_add], callback);
    }

    getPasswordByUser(username, callback){
        var sql = "SELECT password FROM restaurant_review.user_details WHERE username = ?";
        return db.query(sql, username, callback)
    }
    
    deleteUser(userId, callback){
        var sql = "DELETE FROM restaurant_review.user_details WHERE userId = ?";
        db.query(sql, userId, callback)
    }
}

module.exports = UserDB;