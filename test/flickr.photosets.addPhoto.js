var flickr = require('..')();
var assert = require('assert');

describe('flickr.photosets.addPhoto', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photosets.addPhoto({ photoset_id: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.addPhoto({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photosets.addPhoto({ api_key: '_', photoset_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photosets.addPhoto({ api_key: '_', photoset_id: '_', photo_id: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
