var request = require('superagent');
var validate = require('../validate');

/**
 * @constructor
 * @param {Object} args
 */

function Feeds(args) {

	// default arguments
	this._args = args || {
		format: 'json'
	};
}

/**
 * Factory method to create a new request for a feed.
 * @param {String} feed
 * @param {Object} args
 * @returns {Request}
 */

Feeds.prototype._ = function (feed, args) {
	return request('GET', 'https://www.flickr.com/services/feeds/' + feed + '.gne')
	.query(this._args)
	.query(args);
};

/**
 * Public Photos & Videos
 * @param {Object} args
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/photos_public/
 */

Feeds.prototype.publicPhotos = function (args) {
	return this._('photos_public', args);
};

/**
 * Friends' Feed
 * @param {Object} args
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/photos_friends/
 */

Feeds.prototype.friendsPhotos = function (args) {
	validate(args, 'user_id');

	return this._('photos_friends', args);
};

/**
 * Favorite Photos Feed
 * @param {Object} args
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/photos_faves/
 */

Feeds.prototype.favePhotos = function (args) {
	// This feed launched with support for id, but was
	// later changed to support `nsid`. This allows us to
	// check both, and fail if neither is specified
	validate(args, ['id', 'nsid']);

	return this._('photos_faves', args);
};

/**
 * Group Discussion Feed
 * @param {Object} args
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/groups_discuss/
 */

Feeds.prototype.groupDiscussions = function (args) {
	validate(args, 'id');

	return this._('groups_discuss', args);
};

/**
 * Group Pool Feed
 * @param {Object} args
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/groups_pool/
 */

Feeds.prototype.groupPool = function (args) {
	validate(args, 'id');

	return this._('groups_pool', args);
};

/**
 * Forum Discussion Feed
 * @param {Object} args
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/forums/
 */

Feeds.prototype.forum = function (args) {
	return this._('forums', args);
};

/**
 * Recent Activity on Your Photostream (erroneously named, includes sets)
 * @param {Object} args
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/activity/
 */

Feeds.prototype.recentActivity = function (args) {
	validate(args, 'user_id');

	return this._('activity', args);
};

/**
 * Recent Comments Feed
 * @param {Object} args
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/photos_comments/
 */

Feeds.prototype.recentComments = function (args) {
	validate(args, 'user_id');

	return this._('photos_comments', args);
};

/**
 * @module services/feeds
 */

module.exports = Feeds;
