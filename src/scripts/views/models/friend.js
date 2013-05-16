/*global define*/
/*global Backbone*/
'use strict';
define(['tpl!templates/models/friend.tmpl'], function(tmpl) {
	return Backbone.Marionette.ItemView.extend({
		template: tmpl,

		initialize: function() {
			this.modelBinder = new Backbone.ModelBinder();
		},

		render: function() {
			this.$el.html(this.template());
			this.modelBinder.bind(this.model, this.el);
		}
	});
});
