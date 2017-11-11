var mongoose = require('mongoose').set('debug', true);

var Schema = mongoose.Schema;

var User = new Schema({
    name: String, 
    pwd: String 
});

module.exports = {
    UserModel: mongoose.model('UserModel', User)
}
