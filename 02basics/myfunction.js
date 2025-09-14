"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    return { name: name, email: email, isPaid: isPaid };
}

var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return { name: name, email: email, isPaid: isPaid };
};
addTwo(5);
getUpper("hello");
var user = signUpUser("john", "abc@google.com", true);
console.log(user);
loginUser("alex", "alex@yahoo.com");
