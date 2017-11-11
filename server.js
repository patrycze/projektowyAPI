var express = require('express');
var app = express();
var config = require('./config/config.js')
var mongoose = require('mongoose');
var userController = require('./controllers/user-controller');
var bodyParser = require('body-parser');

mongoose.connect(config.getConfig());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/users', userController.getUsers);
app.post('/createuser', userController.createUser);

app.listen(8080);