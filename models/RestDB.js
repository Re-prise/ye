"use strict"

var db = require('../db-connections');
class RestDB{
    getAllRestaurant(callback){
        var sql = "SELECT * from restaurant_review.restaurant";
        db.query(sql, callback);
    }

    getRestaurantBySearch(search, callback){
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE rest_name LIKE CONCAT('%', ? ,'%')";
        db.query(sql, search, callback);
    }

    getRestaurantByLocationZone(Zone, callback){
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE zone = ?";
        db.query(sql, Zone, callback)
    }

    getRestaurantByPrice(Price, callback){
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE price <= ?";
        return db.query(sql, Price, callback)
    }
}

module.exports = RestDB;