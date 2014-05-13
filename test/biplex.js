
/**
 * Test dependencies.
 */

var assert = require('assert');
var biplex = require('..');

describe("Emitter", function() {
	
	it("should be an emitter", function(done) {
		var emitter = biplex('one');
		emitter.on('foo', done);
		emitter.emit('foo');
	});
	
});
