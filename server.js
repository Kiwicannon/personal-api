var express = require('express');
var bodyParser = require('body-parser');

// var user = require('./user.js');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();
var port = 9090;

app.use(middleware.addHeaders);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/name',mainCtrl.getName)

app.get('/location',mainCtrl.getLocation)

app.get('/occupations', mainCtrl.getOccupations)

app.get('/occupationslatest', mainCtrl.getLatestOccupations)

app.get('/hobbies', mainCtrl.getHobbies)

app.get('/hobbies/:type', mainCtrl.getHobbiesType)

app.get('/family', mainCtrl.getFamily)

app.get('/family/:gender', mainCtrl.getFamilyByGender)

app.get('/restaurants', mainCtrl.getRestaurants)

app.listen(port, function(){
    console.log('server is now live')
})