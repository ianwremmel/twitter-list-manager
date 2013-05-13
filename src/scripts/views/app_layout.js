/*global define*/
'use strict';
define(['marionette', 'tpl!/templates/app_layout.tmpl'], function(Marionette, tmpl) {
	return Marionette.Layout.extend({
		template: tmpl,

		regions: {
			user: '#user'
		},

		showRegions: function() {
			var self = this;
			require(['views/user', 'models/user'], function(UserView, UserModel) {
				self.user.show(new UserView({model: new UserModel()}));
			});
		}
	});
});
