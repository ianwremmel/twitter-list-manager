/*global define*/
/*global Backbone*/
'use strict';
define(['views/models/friend'], function(FriendView) {
	return Backbone.Marionette.CollectionView.extend({
		itemView: FriendView,

		tag: 'ul'
	});
});
