/*global define*/
/*global Backbone*/
'use strict';
define(function() {
	return Backbone.Model.extend({
		url: 'account/settings.json'
	});
});
