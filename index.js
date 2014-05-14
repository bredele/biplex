
/**
 * Module dependencies.
 * @api private
 */

var Emitter = require('component-emitter');
var decorator = require('./lib/decorator');



/**
 * Expose 'biplex'
 */

module.exports = function(name) {
	var emitter = new Biplex(name);
	decorator.register(name, emitter);
	return emitter;
};


/**
 * biplex constructor.
 *
 * Examples:
 *
 *   var foo = biplex('foo');
 * 
 * @param {String} name
 * @api public
 */

function Biplex(name) {
	this.name = name;
}


// a biplex is an emitter

Emitter(Biplex.prototype);


/**
 * Listen events from biplex.
 *
 * Examples:
 *
 *   foo.from('bar').on('beep', fn);
 *   
 * @param  {String} destination 
 * @return {Emitter} decorator
 * @api public
 */

Biplex.prototype.from = function(dest) {
	return decorator(this.name, dest);
};


/**
 * Emit events to biplex.
 *
 * Examples:
 *
 *   bar.to('foo').emit('beep');
 *   
 * @param  {String} source 
 * @return {Emitter} decorator
 * @api public
 */

Biplex.prototype.to = function(source) {
	return decorator(source, this.name);
};
