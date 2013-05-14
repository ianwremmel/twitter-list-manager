/*global define*/
/*global $*/
'use strict';

define(function(){
	var ajax = function(url, options) {
		// Taken from jQuery.ajax to match old method signature
		if (typeof url === 'object') {
			options = url;
			url = undefined;
		}

		options.url = '/proxy/' + options.url;
		return $.ajax(url, options);
	};

	return function(Backbone) {
		Backbone.ajax = function() {
			return ajax.apply(Backbone.$, arguments);
		};
	};
});
