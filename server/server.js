/*jslint node: true*/
'use strict';

var express = require('express'),
	routes = require('./routes'),
	http = require('http'),
	path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(app.router);

// development only
if ('development' === app.get('env')) {
	app.use(express.errorHandler());

	app.use(express.static(path.join(__dirname, '../src')));
	app.use('/components', express.static(path.join(__dirname, '../components')));
	app.use('/.tmp', express.static(path.join(__dirname, '../.tmp')));
	// Need to bind ../src in two places so that relative paths work and so that
	// it responds to requests for index.
	app.use('/src', express.static(path.join(__dirname, '../src')));
}
else {
	// Mount the public directory to '/'
	app.use(express.static(path.join(__dirname, 'public')));
}

app.all('/proxy*', routes.proxy);

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
