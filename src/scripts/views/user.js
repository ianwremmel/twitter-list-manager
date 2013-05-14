/*global define*/
'use strict';
define(['marionette', 'models/user', 'tpl!templates/user.tmpl'], function(Marionette, UserModel, tmpl) {
	return Marionette.ItemView.extend({
		template: tmpl,

		initialize: function() {
			this.model.fetch();
			console.log(this.model);
		}
	});
});
