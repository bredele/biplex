
/**
 * Biplex emitters.
 * @type {Object}
 */

var emitters = {};


/**
 * Expose 'decorator'
 */

module.exports = decorator;


/**
 * Emitter decorator.
 *
 * @param {String} source
 * @param {String} destination
 * @api private
 */

function decorator(source, dest) {
  var emitter = emitters[source];
  return {
    emit: function(topic) {
      var args = [].slice.call(arguments, 1);
      args.splice(0, 0, dest + ' ' + topic);
      emitter.emit.apply(emitter, arguments);
      emitter.emit.apply(emitter, args);
    },
    on: function(topic, fn) {
      emitter.on(dest + ' ' + topic, fn);
    },
    once: function(topic, fn) {
      emitter.once(dest + ' ' + topic, fn);
    }
  };
}


/**
 * Cache biplex emitters.
 * 
 * @param  {String} name 
 * @param  {Emitter} emitter
 * @api private
 */

decorator.register = function(name, emitter) {
  emitters[name] = emitter;
};
