var flickr = require('..')();
var assert = require('assert');

describe('flickr.galleries.getInfo', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.galleries.getInfo({ gallery_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "gallery_id"', function () {

		assert.throws(function () {
			flickr.galleries.getInfo({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "gallery_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.galleries.getInfo({ api_key: '_', gallery_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});