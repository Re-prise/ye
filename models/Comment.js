"use strict"

class Comment {
constructor(_id, restId, userId, rating, review, datePosted, upvotes) {
this._id = _id;
this.restId = restId;
this.userId = userId
this.rating = rating;
this.review = review;
this.datePosted = datePosted;
this.upvotes = upvotes
}
getId() {
    return this._id;
}
getRestId() {
    return this.restId;
}
getUserId() {
    return this.userId;
}
getRating() {
    return this.rating;
}
getReview() {
    return this.review;
}
getDatePosted() {
    return this.datePosted;
}
getUpvotes(){
    return this.upvotes;
}

setId(_id){
    this._id = _id
}
setRestId(restId) {
    this.restId = restId;
}
setUserId(userId) {
    this.userId = userId;
}
setRating(rating) {
    this.rating = rating;
}
setReview(review) {
    this.review = review;
}
setDatePosted(datePosted) {
    this.datePosted = datePosted;
}
setUpvotes(upvotes) {
    this.upvotes = upvotes;
}
}

module.exports = Comment;

