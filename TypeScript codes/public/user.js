"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Users = (function () {
    function Users() {
    }
    Users.prototype.addUser = function (user) {
        return "".concat(user, " is Added");
    };
    Users.prototype.removeUser = function (user) {
        console.log("".concat(user, " is removed"));
    };
    return Users;
}());
var User1 = new Users;
var result = User1.addUser('Muhammad');
User1.removeUser("Furquan");
console.log(result);
