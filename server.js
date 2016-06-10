/**
 * Created by cjpowers on 6/10/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');

var app = express();
var config = require('./config.json')

var corsOptions = {
    origin: 'http://localhost:3000'
}



app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
    secret: config.sessionSecret
}))




app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.index);




app.listen(config.port, function(){
    console.log('Listening on port ', config.port);
    console.log(__dirname);
})