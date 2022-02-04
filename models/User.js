"use strict"

class User {
constructor(userId, username, password, email_add, First_name, Last_name, Mobile_Num, Address, Gender) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.email_add = email_add;
    this.First_name = First_name;
    this.Last_name = Last_name;
    this.Mobile_Num = Mobile_Num;
    this.Address = Address;
    this.Gender = Gender;
}
getUserId() {
    return this.userId;
}
getUsername() {
    return this.username;
}
getPassword() {
    return this.password;
}
getEmailAdd() {
    return this.email_add;
}
getFirst_name() {
    return this.First_name;
}
getLast_name() {
    return this.Last_name;
}
getMobile_Num() {
    return this.Mobile_Num;
}
getAddress() {
    return this.Address;
}
getGender() {
    return this.Gender;
}

setUserId(userId) {
    this.userId = userId;
}
setUsername(username) {
    this.username = username;
}
setPassword(password) {
    this.password = password;
}
setEmailAdd(email_add) {
    this.email_add = email_add;
}
setFirst_name(First_name) {
    this.First_name = First_name;
}
setLast_name(Last_name) {
    this.Last_name = Last_name;
}
setMobile_Num(Mobile_Num) {
    this.Mobile_Num = Mobile_Num;
}
setAddress(Address) {
    this.Address = Address;
}
setGender(Gender) {
    this.Gender = Gender;
}

}

module.exports = User;

