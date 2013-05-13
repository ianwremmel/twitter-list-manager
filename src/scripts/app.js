/*global define*/
'use strict';
define(['marionette', 'vent'], function(Marionette, vent) {
	var app = new Marionette.Application();

	app.addRegions({
		layout: '#layout'
	});

	app.addInitializer(function() {
		// TODO if logged in, show AppView
		require(['views/app_layout'], function(AppLayout) {
			var appLayout = new AppLayout();
			app.layout.show(appLayout);
			appLayout.showRegions();
		});
	});

	return app;
});
