
/**
 * Test dependencies.
 */

var assert = require('assert');
var biplex = require('..');


describe("1-sided", function() {

	it("should be an emitter", function(done) {
		var emitter = biplex('foo');
		emitter.on('foo', done);
		emitter.emit('foo');
	});
	
});


describe("2-sided", function() {

	var one, two;
	beforeEach(function() {
		one = biplex('one');
		two = biplex('two');
		three = biplex('three');
	});
	
	it('should emit an event to an other biplex', function(done) {
		two.on('bar', done);
		one.to('two').emit('bar');
	});

	it('should listen event from an other biplex', function() {
		var called = 0;
		two.from('one').on('beep', function() {
			called++;
		});

		one.to('two').emit('beep');
		three.to('two').emit('beep');
		assert.equal(called, 1);
	});

});
