/*global define*/
'use strict';
define(['marionette', 'tpl!templates/user.tmpl'], function(Marionette, tmpl) {
	return Marionette.ItemView.extend({
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
