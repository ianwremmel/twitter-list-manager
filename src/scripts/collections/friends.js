/*global define*/
/*global Backbone*/
/*global _*/
'use strict';
define(function() {
	// Backbone doesn't expose this method publicly, so we'll copy and paste it
	// here.
	var wrapError = function (model, options) {
		var error = options.error;
		options.error = function(resp) {
			if (error) {error(model, resp, options);}
			model.trigger('error', model, resp, options);
		};
	};

	return Backbone.Collection.extend({
		url: 'friends/list.json',

		fetch: function(options) {
			options = options ? _.clone(options) : {};
			if (options.parse === void 0) {options.parse = true;}
			var model = this;
			var success = options.success;
			options.success = function(resp) {
				if (!model.set(model.parse(resp.users, options), options)) {return false;}
				if (success) {success(model, resp.users, options);}
				model.trigger('sync', model, resp.users, options);
			};
			wrapError(this, options);
			return this.sync('read', this, options);
		}
	});
});
