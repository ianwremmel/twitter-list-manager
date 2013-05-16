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

		/**
		 * Same as the default Backbone.Collection.fetch, but doesn't duckpunch
		 * options.success.
		 * @param  {[type]} options [description]
		 * @return {[type]}         [description]
		 */
		fetch: function(options) {
			options = options ? _.clone(options) : {};
			if (options.parse === void 0) {
				options.parse = true;
			}

			wrapError(this, options);
			return this.sync('read', this, options);
		},

		sync: function(method, model, options) {
			switch (method) {
				case 'read':
					var params = {type: 'GET', dataType: 'json'};
					if (!options.url) {
						params.url = _.result(model, 'url') || urlError();
					}

					var success = options.success;

					var users = [];

					options.success = function(resp) {
						users.push.apply(users, resp.users);

						if (resp.next_cursor && resp.next_cursor !== 0) {
							params.data = params.data || {};
							params.data.cursor = resp.next_cursor;
							params.url = _.result(model, 'url');
							Backbone.ajax(params);
						}
						else {
							if (!model.set(model.parse(users, params), params)) {
								return false;
							}

							if (success) {
								sucess(model, users, params);
							}

							model.trigger('sync', model. users, params);
						}
					};

					params = _.extend(params, options);
					model.trigger('request', model, xhr, params);
					var xhr = options.xhr = Backbone.ajax(params);
				break;
				default:
					return Backbone.sync.apply(this, arguments);
			}
		}
	});
});
