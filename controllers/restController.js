"use strict";
const RestDB = require('../models/RestDB');
const Restaurant = require('../models/Restaurant');
const { request } = require('express');

var restDB = new RestDB();

function getAllRestaurant(request, respond){
    restDB.getAllRestaurant(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getRestaurantBySearch(request, respond){
    restDB.getRestaurantBySearch(request.params.search, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });
}

function getRestaurantByLocationZone(request, respond){
    restDB.getRestaurantByLocationZone(request.params.zone, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });
}

function getRestaurantByPrice(request, respond){
    restDB.getRestaurantByPrice(request.params.price, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });
}

module.exports = { getAllRestaurant, getRestaurantBySearch, getRestaurantByLocationZone, getRestaurantByPrice }