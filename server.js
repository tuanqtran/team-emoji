// Set dependencies
var express 	= require('express');
var methodOverride	= require('method-override');
var bodyParser 	= require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');

// define controllers
var emoji_controller = require('./controllers/emoji_controller.js');
//var memoji_controller = require('./controllers/memoji_controller.js');
//var emojid_controller = require('./controllers/emojid_controller.js')

// create server instance
var app = express();

// Set which database connection to use
var env = process.env.NODE_ENV || 'development';

// we set the port of the app
app.set('port', process.env.PORT || 3000);

// target static files
app.use('/static', express.static(__dirname + '/public/assets/'));

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use('/', emoji_controller);
//app.use('/memoji', memoji_controller); It may be useful to seperate the controllers. One for main and one for each game
//app.use('/emojid', emojid_controller);

// start server listening
var server = app.listen(app.get('port'), function() {
  	// then save a log of the listening to our debugger.
    console.log('Express server listening on port ' + server.address().port);
});
