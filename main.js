
var log = require('logger')(module);
var db = require('db');
db.connect();
var User = require('./user');
// require('./user');

//

// var Petya = new user.User("Петя");
// var Vasya = new user.User("Вася");
function run() {
    var Petya = new User("Петя");
    var Vasya = new User("Вася");


Vasya.hello(Petya);
    log(db.getPhrase("Run succesfull"));
}

if (module.parent)  {
    exports.run = run;
} else {
    run();
}

// console.log(module);