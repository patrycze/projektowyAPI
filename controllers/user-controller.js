var UserModel = require('../models/user-model').UserModel;

module.exports.createUser = function(req, res) {
    var User = new UserModel({
        name: req.body.name,
        pwd: req.body.pwd
    })
   
    User.save(function(err, result) {
        if (err) throw err;

        res.send(result);
    })
}

module.exports.getUsers = function(req, res) {
    UserModel.find({}, function(err, result) {
        if(err) throw err;

        res.send(result);
    });
}