/*global define*/
'use strict';
define(['marionette', 'tpl!templates/user.tmpl'], function(Marionette, tmpl) {
	return Marionette.ItemView.extend({
		template: tmpl,

		initialize: function() {

		}
	});
});
