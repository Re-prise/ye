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
    var First_name = request.body.First_name;
    var Last_name =request.body.Last_name;
    var Mobile_Num =request.body.Mobile_Num;
    var Address = request.body.Address;
    var Gender = request.body.Gender;
    password = bcrypt.hashSync(password, 10);
    console.log(password)
    userDB.addUserDetails(username, password, email_add, First_name, Last_name, Mobile_Num, Address, Gender, function(error, result){
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

function getUser(request, respond){
    var token = request.body.token;
  console.log(token)
  try {
    var decoded = jwt.verify(token, secret);
    userDB.getUser(decoded, function (error, result) {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  } catch (error) {
    respond.json({result: "invalid token" });
  }
}


module.exports = { getAllUser, changePassword, addUserDetails, getPasswordByUser,deleteUser,loginUser, getUser }