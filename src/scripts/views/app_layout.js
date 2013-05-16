/*global define*/
'use strict';
define(['marionette', 'tpl!/templates/app_layout.tmpl'], function(Marionette, tmpl) {
	return Marionette.Layout.extend({
		template: tmpl,

		regions: {
			user: '#user',
			friends: '#friends'
		},

		showRegions: function() {
			var self = this;
			require(['views/models/user', 'models/user'], function(UserView, UserModel) {
				var model = new UserModel();
				var view = new UserView({model: model});

				// defer view rendering until after the data has been retreived
				model.once('change', function() {
					self.user.show(view);
				});

				model.fetch();
			});

			require(['views/collections/friends', 'collections/friends'], function(FriendsView, FriendsCollection) {
				var collection = new FriendsCollection();
				var view = new FriendsView({collection: collection});

				self.friends.show(view);

				collection.fetch();
			})
		}
	});
});
