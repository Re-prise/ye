"use strict"

class Restaurant {
    constructor(restId, price, zone, search) {
        this.restId = restId;
        this.price = price;
        this.zone = zone;
        this.search = search;
    }
    getRestId(){
        return this.restId;
    }
    getPrice(){
        return this.price;
    }
    getZone(){
        return this.zone;
    }
    getSearch(){
        return this.search;
    }

    setRestId(restId){
        this.restId = restId;
    }
    setPrice(price){
        this.price = price;
    }
    setZone(zone){
        this.zone = zone;
    }
    setSearch(search){
        this.search = search;
    }
}