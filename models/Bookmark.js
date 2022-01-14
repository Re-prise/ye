"use strict"

class Bookmark {
    constructor(_id, userId, restId){
    this._id = _id
    this.userId = userId;
    this.restId = restId;
    }
    getId(){
        return this._id;
    }
    getUserId(){
        return this.userId;
    }
    getRestId(){
        return this.restId;
    }

    setId(){
        this.id = _id;
    }
    setUserId(userId){
        this.userId = userId;
    }
    setRestId(restId){
        this.restId = restId;
    }
}

module.exports = Bookmark;
