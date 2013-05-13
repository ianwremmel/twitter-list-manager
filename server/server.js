/*jslint node: true*/
'use strict';

var express = require('express'),
	http = require('http'),
	path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());

	app.use(express.static(path.join(__dirname, '../src')));
	app.use('/components', express.static(path.join(__dirname, '../components')));
	app.use('/.tmp', express.static(path.join(__dirname, '../.tmp')));
	app.use('/src', express.static(path.join(__dirname, '../src')));
}
else {
	// Mount the public directory to '/'
	app.use(express.static(path.join(__dirname, 'public')));
}


http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
