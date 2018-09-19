var db = require('db');


function User(name) {
    this.name = name;
}
User.prototype.hello = function (who) {
    console.log('Привет '+who.name);
};

// console.log('User is required!!!');
module.exports = User;