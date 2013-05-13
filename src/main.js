/*jslint node: true*/
'use strict';

require.config({
	baseUrl: '/scripts/',
	paths: {
		// libraries
		backbone: '/components/backbone/backbone',
		jquery: '/components/jquery/jquery',
		'backbone.babysitter': '/components/backbone.babysitter/lib/amd/backbone.babysitter',
		marionette: '/components/backbone.marionette/lib/core/amd/backbone.marionette',
		'backbone.wreqr': '/components/backbone.wreqr/lib/amd/backbone.wreqr',
		underscore: '/components/lodash/lodash',
		tpl: '/components/requirejs-tpl/tpl',

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

require(['app'], function(app) {
	app.start();
});
