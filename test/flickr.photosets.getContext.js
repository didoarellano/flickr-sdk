var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photosets.getContext', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photosets.getContext({
				photoset_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.getContext({
				photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photosets.getContext({
			photo_id: '_',
			photoset_id: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.photosets.getContext');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.photo_id, '_');
		assert.equal(req.params.photoset_id, '_');
	});

});
