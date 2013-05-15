/*jslint node: true*/
'use strict';

require.config({
	// The . in the baseUrl is a trick to make require.js and r.js both look for
	// the correct paths.
	baseUrl: './scripts/',
	paths: {
		// libraries
		backbone: '../../components/backbone/backbone',
		'backbone.babysitter': '../../components/backbone.babysitter/lib/amd/backbone.babysitter',
		'backbone.ModelBinder': '../../components/Backbone.ModelBinder/Backbone.ModelBinder',
		'backbone.wreqr': '../../components/backbone.wreqr/lib/amd/backbone.wreqr',
		jquery: '../../components/jquery/jquery',
		marionette: '../../components/backbone.marionette/lib/core/amd/backbone.marionette',
		underscore: '../../components/lodash/lodash',
		tpl: '../../components/requirejs-tpl/tpl',

		// non-libraries
		templates: '../templates'
	},
	shim: {
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});

require([
	'app',
	'lib/duckpunch',
	'backbone.ModelBinder'
	], function(app, duckpunch) {
		/*global Backbone*/
		duckpunch(Backbone);
		app.start();
	}
);
