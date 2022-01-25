"use strict"
const CommentsDB = require('../models/CommentsDB.js');
const Comment = require('../models/Comment');
const { request } = require('express');

var commentsDB = new CommentsDB();

function getAllComments(request, respond){
    commentsDB.getAllComments(function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
};

function addComment(request, respond){
    var now = new Date();
    var comment = new Comment(null, request.body.restId, request.body.userId, request.body.rating, request.body.review, now, request.body.upvotes);
    commentsDB.addComment(comment, function (error, result){
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
};

function updateComment(request, respond){
    var rating = request.body.rating;
    var review = request.body.review;
    var now = new Date();
    var upvotes = request.body.upvotes;
    var _id = request.params._id;
    commentsDB.updateComment(rating, review, now, upvotes, _id, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
};

function deleteComment(request, respond){
    var comment = parseInt(request.params._id);
    commentsDB.deleteComment(comment, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
};

function getCommentsOrderedUpvotes(request, respond){
    commentsDB.getCommentsOrderedUpvotes(request.params.restId, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });
}

function getCommentsByDatePosted(request, respond){
    commentsDB.getCommentsByDatePosted(request.params.restId, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });
}

function getCommentCount(request, respond){
    commentsDB.getCommentCount(request.params.restId, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });
}

function getAllCommentsByRestOrderedDate(request, respond){
    commentsDB.getAllCommentsByRestOrderedDate(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });
}



module.exports = { getAllComments, addComment, updateComment, deleteComment, getCommentsOrderedUpvotes, getCommentsByDatePosted, getCommentCount, getAllCommentsByRestOrderedDate };