"use strict"
const UserDB = require('../models/UserDB');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { request } = require('express');

var userDB = new UserDB();

function getAllUser(request, respond){
    userDB.getAllUser(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function changePassword(request, respond){
    var userId = parseInt(request.params.userId);
    var password = request.body.password;
    password = bcrypt.hashSync(password, 1)
    userDB.changePassword(password, userId, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addUserDetails(request, respond){
    var username = request.body.username;
    var password = request.body.password;
    var email_add = request.body.email_add;
    password = bcrypt.hashSync(password, 1)
    userDB.addUserDetails(username, password, email_add, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getPasswordByUser(request, respond){
    userDB.getPasswordByUser(request.params.username, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteUser(request, respond){
    userDB.deleteUser(request.params.userId, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}
module.exports = { getAllUser, changePassword, addUserDetails, getPasswordByUser,deleteUser }