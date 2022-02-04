"use strict"

var db = require('../db-connections');
class CommentsDB{
    getAllComments(callback){
        var sql = "SELECT * from restaurant_review.comments";
        return db.query(sql, callback);
    }

    addComment(comment, callback){
        var sql = "INSERT INTO restaurant_review.comments (restId, userId, rating, review, datePosted, upvotes) VALUES (?, ?, ?, ?, ?, ?)";
        return db.query(sql, [comment.getRestId(), comment.getUserId(), comment.getRating(), comment.getReview(), comment.getDatePosted(), comment.getUpvotes()], callback)
    }

    updateComment(rating, review, datePosted, upvotes, _id, callback){
        var sql = "UPDATE restaurant_review.comments SET rating = ?, review = ?,  datePosted = ?, upvotes = ? WHERE _id = ?";
        return db.query(sql, [rating, review, datePosted, upvotes, _id] , callback);
    }

    deleteComment(_id, callback){
        var sql = "DELETE from restaurant_review.comments WHERE _id = ?";
        db.query(sql, _id, callback);
    }

    getCommentsOrderedUpvotes(restId, callback){
        var sql = "SELECT r.rest_name, u.username, c.review, c.rating, c.upvotes, c.datePosted FROM restaurant_review.restaurant AS r, restaurant_review.comments AS c, restaurant_review.user_details AS u WHERE r.restId = c.restId AND c.userId = u.userId AND r.restId = ? ORDER BY c.upvotes DESC;";
        return db.query(sql, restId, callback);
    }

    getCommentsByDatePosted(restId, callback){
        var sql = "SELECT c.restId, r.rest_name, c.review, c.rating, c.datePosted, c.upvotes FROM restaurant_review.restaurant AS r, restaurant_review.comments AS c WHERE r.restId = c.restId AND r.restId = ? ORDER BY c.datePosted DESC";
        db.query(sql, restId, callback)
    }

    getCommentCount(restId, callback){
        var sql = "SELECT COUNT(review) FROM restaurant_review.comments WHERE restID = ?";
        return db.query(sql, restId, callback);
    }

    getAllCommentsByRestOrderedDate(callback){
        var sql = "SELECT r.restId, r.rest_name, u.username, c._id, c.review, c.rating, c.upvotes, c.datePosted FROM restaurant_review.restaurant AS r, restaurant_review.comments AS c, restaurant_review.user_details AS u WHERE r.restId = c.restId AND c.userId = u.userId ORDER BY c.upvotes DESC;";
        return db.query(sql, callback);
    }
}

module.exports = CommentsDB;