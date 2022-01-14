"use strict"

var db = require('../db-connections');
class CuisineDB{
    getCuisineZonePriceAvgRatingOfRestaurant(restId, callback){
        var sql = "SELECT r.rest_name, r.price, cu.cusine, r.zone, AVG(co.rating) FROM restaurant_review.cusines AS cu, restaurant_review.restaurant AS r, restaurant_review.comments AS co WHERE r.restId = cu.restId AND r.restId = co.restId AND cu.restId = ?";
        db.query(sql, restId, callback);
    }

    getRestaurantByCuisine(Cusine, callback){
        var sql = "SELECT restaurant.rest_name, cusines.cusine FROM restaurant_review.restaurant JOIN restaurant_review.cusines ON restaurant.restId = cusines.restId WHERE cusines.cusine = ? ORDER BY restaurant.rest_name";
        db.query(sql, Cusine, callback)
    }
}

module.exports = CuisineDB;