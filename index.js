
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
	var emitter = new Biplex(name);
	emitters[name] = emitter;
	return emitter;
};



/**
 * biplex constructor.
 * @api public
 */

function Biplex(name) {
	this.name = name;
}


Emitter(Biplex.prototype);


Biplex.prototype.from = function(name) {
	var _this = this;
	return {
		on: function(topic, fn) {
			emitters[_this.name].on(name + ' ' + topic, fn);
		}
	};
};

Biplex.prototype.to = function(name) {
	var _this = this;
	//return emitters[name];
	return {
		emit: function(topic) {
			emitters[name].emit(topic);
			emitters[name].emit(_this.name + ' ' + topic);
		}
	};
};