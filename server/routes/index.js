/*jslint node: true*/
'use strict';

var OAuth = require('oauth');

exports.proxy = function(req, res) {
	var oauth = new OAuth.OAuth(
		'https://api.twitter.com/oauth/request_token',
		'https://api.twitter.com/oauth/access_token',
		process.env.TWITTER_APP_CONSUMER_KEY,
		process.env.TWIITER_APP_SECRET_KEY,
		'1.0A',
		null,
		'HMAC-SHA1'
	);

	oauth.get(
		'https://api.twitter.com/1.1/' + req.path.split('/').slice(2).join('/'),
		process.env.TWITTER_USER_TOKEN,
		process.env.TWITTER_USER_SECRET,
		function (e, data, response) {
			if (e) {
				console.error(e);
			}
			res.write(data);
			res.end();
		});
};
