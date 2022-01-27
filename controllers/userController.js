"use strict"
const UserDB = require('../models/UserDB');
const User = require('../models/User');
const bcrypt = require('bcrypt');
var  jwt = require('jsonwebtoken')
var secret = "somesecretkey"
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
    var token = request.body.token;
    try {
        var decoded = jwt.verify(token, secret);
        userDB.changePassword(password, userId, function(error, result){
            if(error){
                respond.json(error);
            }
            else{
                respond.json(result);
            }
        });
    } catch (error){
        respond.json({result:"invalid token"});
    } 
}

function addUserDetails(request, respond){
    var username = request.body.username;
    var password = request.body.password;
    var email_add = request.body.email_add;
    password = bcrypt.hashSync(password, 10);
    console.log(password)
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

function loginUser(request, respond){
    var username = request.body.username;
    var password = request.body.password;
    userDB.loginUser(username, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            // console.log(result[0].password);
            const hash = result[0].password;
            var flag = bcrypt.compareSync(password, hash);
            if(flag){
                var token = jwt.sign(username, secret)
                respond.json({result: token})
            } else {
                respond.json({result:"Invalid"});
            }
        }
    })
}
module.exports = { getAllUser, changePassword, addUserDetails, getPasswordByUser,deleteUser,loginUser }