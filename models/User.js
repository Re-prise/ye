"use strict"

class User {
constructor(userId, username, password, email_add) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.email_add = email_add;
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
}

module.exports = User;

