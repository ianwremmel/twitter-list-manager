/*global define*/
'use strict';
define(['marionette', 'models/user', 'tpl!templates/user.tmpl'], function(Marionette, UserModel, tmpl) {
	return Marionette.ItemView.extend({
		template: tmpl
	});
});