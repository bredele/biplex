
/**
 * Module dependencies.
 * @api private
 */

var Emitter = require('component-emitter');


/**
 * Expose 'biplex'
 */

module.exports = biplex;


/**
 * biplex constructor.
 * @api public
 */

function biplex(name) {
  return new Emitter();
}
