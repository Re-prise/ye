"use strict"

class Cuisines {
    constructor(restId, cusine){
        this.restId = restId;
        this.cusine = cusine;
    }
    getRestId(){
        return this.restId;
    }
    getCusine(){
        return this.cusine;
    }

    setUserId(restId){
        this.restId = restId;
    }
    setCusine(cusine){
        this.cusine = cusine;
    }
}

module.exports = Cuisines;