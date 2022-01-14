"use strict"
const BookmarkDB = require('../models/BookmarkDB');
const Bookmark = require('../models/Bookmark');
const { request } = require('express');

var bookmarkDB = new BookmarkDB();

function addBookmark(request, respond){
    var userId = request.body.userId;
    var restId = request.body.restId;
    bookmarkDB.addBookmark(userId, restId, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function removeBookmark(request, respond){
    bookmarkDB.removeBookmark(request.params._id,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAllBookmarks(request, respond){
    bookmarkDB.getAllBookmarks(request.params.userId, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {addBookmark, removeBookmark, getAllBookmarks}