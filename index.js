
/**
 * Module dependencies.
 * @api private
 */

var Emitter = require('component-emitter');


var emitters = {};


/**
 * Expose 'biplex'
 */

module.exports = function(name) {
	var emitter = new Biplex();
	emitters[name] = emitter;
	return emitter;
};



/**
 * biplex constructor.
 * @api public
 */

function Biplex() {

}


Emitter(Biplex.prototype);


Biplex.prototype.from = function(name) {
	
};

Biplex.prototype.to = function(name) {
	return emitters[name];
};