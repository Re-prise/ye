"use strict"
const CuisineDB = require('../models/CuisineDB');
const Cuisine = require('../models/Cuisine');
const { request } = require('express');

var cuisineDB = new CuisineDB();

function getCuisineZonePriceAvgRatingOfRestaurant(request, respond){
    cuisineDB.getCuisineZonePriceAvgRatingOfRestaurant(request.params.restId, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getRestaurantbyCuisine(request, respond){
    cuisineDB.getRestaurantByCuisine(request.params.cusine, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = { getCuisineZonePriceAvgRatingOfRestaurant, getRestaurantbyCuisine }