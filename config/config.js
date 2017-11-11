var config = require('./config.json');

module.exports.getConfig = function() {
    
    return "mongodb://" + config.usr + ":" + config.pwd + "@ds159845.mlab.com:59845/projekt"
}