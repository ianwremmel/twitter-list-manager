/*global define*/
/*global Backbone*/
'use strict';
define(function() {
	return Backbone.Model.extend({
		url: function() {
			return 'users/show/?id=' + this.get('id');
		}
	});
});
